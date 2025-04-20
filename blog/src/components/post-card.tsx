import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";


interface ArticleCardProps {
  author: string;
  date: any;
  title: string;
  content: string;
  gradient?: string;
  showButton?: boolean;
  desc?: string;
  id: string;
}

export const PostCard: React.FC<ArticleCardProps> = ({
                                                       author,
                                                       desc,
                                                       date,
                                                       title,
                                                       content,
                                                       id,
                                                     }) => {

  const shouldShowButton = content.length > 160;

  return (
    <div className="rounded-[20px] min-w-[510px] max-[420px] overflow-hidden bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`flex items-center justify-center h-[150px] bg-[linear-gradient(to_right,#675CFF,#5954AA)]`}>
        <h1 className="font-fustat font-extrabold text-[64px] text-center text-white/10">{desc}</h1>
      </div>
      <div className="p-5 grid">
        <div className="flex justify-between items-center mb-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#675CFF] to-[#5954AA] flex items-center justify-center">
              <FaUserAlt className="text-white w-5 h-5" />
            </div>
          </div>
          <div className={'w-full flex items-center justify-between'}>
            <span className="text-sm font-semibold">{author}</span>
            <span className="text-gray-500 text-[11px] font-fustat"><p className="text-sm text-gray-400">
  {new Date(date).toLocaleDateString('ru-RU')}
</p></span>
          </div>
        </div>
        <h3 className="text-lg font-fustat font-semibold mb-2">{title}</h3>
          <p className="text-xl text-gray-500 mb-4  text-muted-foreground line-clamp-3">
          {content}
        </p>

        {shouldShowButton && (
          <div className="flex justify-center">
            <Link href={`/read-post/${id}`} scroll={false}>
              <button className="px-6 py-2 text-sm bg-gray-100 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                Read More
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
