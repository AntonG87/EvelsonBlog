// components/article-card.tsx
interface ArticleCardProps {
  author: string;
  date: string;
  title: string;
  excerpt: string;
  gradient?: string;
  showButton?: boolean;
  desc?: string
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
                                                          author,
                                                          desc,
                                                          date,
                                                          title,
                                                          excerpt,
                                                          gradient = 'from-[#8991E4] to-[#5F5CAD]',
                                                          showButton = false,
                                                        }) => {
  return (
    <div className="rounded-[20px] overflow-hidden bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`flex items-center justify-center h-[150px] bg-gradient-to-r ${gradient}`} >
        <h1 className={' font-fustat font-extrabold  text-[64px] text-center  text-gray-200/50'}>{desc}</h1>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${gradient}`} />
            <span className="text-sm font-semibold">{author}</span>
          </div>
          <span className="text-xs text-gray-400">{date}</span>
        </div>
        <h3 className="text-lg font-fustat font-semibold  mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{excerpt}</p>
        {showButton && (
          <button className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200 transition">
            Read More
          </button>
        )}
      </div>
    </div>
  );
};