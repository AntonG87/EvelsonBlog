interface AboutCardProps {
  className?: string;
  category: string;
  title: string;
  content: any;  // content теперь может быть как строкой, так и массивом JSX элементов
}

export const AboutCard: React.FC<AboutCardProps> = ({ category, title, content }) => {
  const isSkillsCategory = category === 'Skills';  // Проверяем, если категория Skills

  return (
    <div className="rounded-[20px] overflow-hidden bg-white shadow-md hover:transform transition-transform duration-300 hover:scale-130 hover:shadow-lg">
      <div className={`flex items-center justify-center h-[120px] bg-[linear-gradient(to_right,#6753FF,#5954AA)]`}>
        <h1 className="font-fustat font-extrabold text-[64px] text-center text-white/30">{category}</h1>
      </div>
      <div className="p-5 h-[300px] pb-[20px]">
        <h3 className="text-lg font-fustat font-semibold mb-2">{title}</h3>
        {isSkillsCategory &&
        <div><p className={'mb-4 text-sm text-gray-500'}>I use an advanced technology stack to develop efficient and scalable solutions that enable the creation
          of high-quality products with a focus on performance and user experience. My approach includes modern tools and
          frameworks that ensure flexibility and fast development.
        </p>
        </div>}
        {/* Контейнер для всех элементов */}
        <div className="flex flex-wrap gap-2">
          {/* Проверяем, является ли content массивом, и отображаем элементы в зависимости от этого */}
          {Array.isArray(content) ? (
            content.map((item, index) => (
              <div
                className={`flex items-center p-2 ${isSkillsCategory ? 'border border-gray-300 rounded-md transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-gray-100' : ''}`}
                key={index}
              >
                <span className="text-sm text-gray-500">{item}</span>
              </div>
            ))
          ) : (
            <div className={`flex items-center  ${isSkillsCategory ? 'border border-gray-300 rounded-md transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-gray-100' : ''}`}>
              <span className="text-sm text-gray-500">{content}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
