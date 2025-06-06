interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

export default function PageHeader({ title, description, backgroundImage, children }: PageHeaderProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-20 lg:py-32">
      {backgroundImage && (
        <>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
        </>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
