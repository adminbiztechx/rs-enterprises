import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export const LatestInsights = ({ onNavigate }) => {
  const blogs = [
    {
      id: 1,
      tag: 'GST',
      tagColor: 'bg-white/95 text-slate-800 border border-slate-200',
      title: 'Latest GST Updates May 2025',
      date: 'May 14, 2025',
      image: '/assets/images/blog-gst-hd.jpg',
      fallbackImage: '/assets/images/blog-gst-orig.png',
    },
    {
      id: 2,
      tag: 'Tally Tips',
      tagColor: 'bg-amber-100 text-amber-800 border border-amber-200',
      title: '10 Tally Tips to Improve Productivity',
      date: 'May 10, 2025',
      image: '/assets/images/blog-tally-tips-hd.jpg',
      fallbackImage: '/assets/images/blog-tally-tips-orig.png',
    },
    {
      id: 3,
      tag: 'Business',
      tagColor: 'bg-blue-100 text-blue-800 border border-blue-200',
      title: 'Why Cloud Accounting is the Future',
      date: 'May 06, 2025',
      image: '/assets/images/blog-cloud-accounting-hd.jpg',
      fallbackImage: '/assets/images/blog-cloud-orig.png',
    },
    {
      id: 4,
      tag: 'Automation',
      tagColor: 'bg-rose-100 text-rose-800 border border-rose-200',
      title: 'Automate Your Business with TallyPrime',
      date: 'May 02, 2025',
      image: '/assets/images/blog-automation-hd.jpg',
      fallbackImage: '/assets/images/blog-automation-orig.png',
    },
  ];

  return (
    <section id="resources" className="py-12 sm:py-16 bg-white">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Heading & CTA Button */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1a38] tracking-tight">
              Latest Insights
            </h2>
            <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed">
              Stay updated with the latest insights, GST updates, Tally tips and business growth strategies.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('resources');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-[#0052cc] bg-white border border-[#0052cc] hover:bg-blue-50 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
              >
                <span>View All Blogs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Blog Cards Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('resources');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-100 transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Card Thumbnail Container */}
                  <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = blog.fallbackImage;
                      }}
                    />
                    
                    {/* Category Pill Tag positioned top left */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-sm ${blog.tagColor}`}>
                        {blog.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <h3 className="text-xs sm:text-[13.5px] font-bold text-slate-800 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors mb-2">
                      {blog.title}
                    </h3>
                  </div>
                </div>

                {/* Date Footer */}
                <div className="px-4 pb-4 pt-0 flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{blog.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default LatestInsights;
