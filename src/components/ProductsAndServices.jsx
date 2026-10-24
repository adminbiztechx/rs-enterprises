import React from 'react';
import {
  Boxes,
  Network,
  Puzzle,
  Cloud,
  FileCheck2,
  Users2,
  Headphones,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

export const ProductsAndServices = ({ onNavigate, onSelectService }) => {
  const items = [
    {
      id: 'software',
      icon: Boxes,
      iconBg: 'bg-blue-100/70 text-blue-600',
      title: 'Tally Software',
      desc: 'Latest TallyPrime editions for every business need.',
      linkText: 'Explore Products',
      href: '#products',
    },
    {
      id: 'implementation',
      icon: Network,
      iconBg: 'bg-emerald-100/70 text-emerald-600',
      title: 'Implementation',
      desc: 'Complete setup, data migration & configuration.',
      linkText: 'Learn More',
      href: '#services',
    },
    {
      id: 'customization',
      icon: Puzzle,
      iconBg: 'bg-purple-100/70 text-purple-600',
      title: 'Customization',
      desc: 'Tailor-made solutions as per your workflow.',
      linkText: 'Learn More',
      href: '#services',
    },
    {
      id: 'cloud',
      icon: Cloud,
      iconBg: 'bg-amber-100/70 text-amber-600',
      title: 'Cloud Solutions',
      desc: 'Access your data securely from anywhere, anytime.',
      linkText: 'Learn More',
      href: '#solutions',
    },
    {
      id: 'gst',
      icon: FileCheck2,
      iconBg: 'bg-teal-100/70 text-teal-600',
      title: 'GST Solutions',
      desc: 'Stay 100% compliant with latest GST regulations.',
      linkText: 'Learn More',
      href: '#solutions',
    },
    {
      id: 'payroll',
      icon: Users2,
      iconBg: 'bg-rose-100/70 text-rose-600',
      title: 'Payroll Solutions',
      desc: 'Simplify payroll & manage your employees better.',
      linkText: 'Learn More',
      href: '#solutions',
    },
    {
      id: 'support',
      icon: Headphones,
      iconBg: 'bg-sky-100/70 text-sky-600',
      title: 'Support & AMC',
      desc: 'Reliable support with AMC plans & TSS.',
      linkText: 'Explore Plans',
      href: '#services',
    },
    {
      id: 'training',
      icon: GraduationCap,
      iconBg: 'bg-amber-100/70 text-amber-600',
      title: 'Training & Certification',
      desc: 'Corporate training, employee training & Tally certification.',
      linkText: 'Learn More',
      href: '#services',
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 bg-white">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1a38] tracking-tight">
            Our Products & Services
          </h2>
        </div>

        {/* 4x2 Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => {
                  if (item.id === 'software' && onNavigate) {
                    onNavigate('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else if (item.href === '#services' && onNavigate) {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else if (item.href === '#solutions' && onNavigate) {
                    onNavigate('solutions');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else if (onSelectService) {
                    onSelectService(item);
                  }
                }}
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Icon Badge */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${item.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#0a1a38] mb-1.5 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                {/* Link */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052cc] group-hover:text-[#003bb3] transition-colors">
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProductsAndServices;
