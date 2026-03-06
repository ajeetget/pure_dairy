import story from '../assets/images/story.jpg';
import qualityIcon from '../assets/images/others/quality_control.jpg'
import farmFreshIcon from '../assets/images/others/fresh_farm.jpg'
import nopreservativeIcon from '../assets/images/others/no_preserve.jpg'
import awardIcon from '../assets/images/others/award.jpg'

const features = [
  {
    icon: qualityIcon,
    title: 'Quality Assured',
    description: 'Every product goes through rigorous quality checks to ensure purity and freshness.',
  },
  {
    icon: farmFreshIcon,
    title: 'Farm Fresh',
    description: 'Direct from healthy farms to your home, maintaining the natural goodness.',
  },
  {
    icon: nopreservativeIcon,
    title: 'No Preservatives',
    description: '100% natural products without any artificial additives or preservatives.',
  },
  {
    icon: awardIcon,
    title: 'Award Winning',
    description: 'Recognized for excellence in dairy production and customer satisfaction.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are committed to delivering the highest quality dairy products with integrity and care
          </p>
        </div>

        <div className="grid grid-cols-1 min-[540px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <img className='rounded-full w-full h-full object-cover' src={feature.icon} />
                {/* <feature.icon size={32} className="text-green-600" /> */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                For over two decades, we have been serving communities with the finest dairy products.
                Our journey began with a simple mission: to provide pure, fresh, and nutritious milk
                to every household.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we work with hundreds of local farmers, ensuring sustainable practices and
                fair compensation while delivering exceptional products to millions of happy customers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl h-80 flex items-center justify-center">
                  <img src={story} className="w-full h-full object-cover rounded-2xl" />
                {/* <p className="text-xl font-semibold text-green-800">Farm to Family</p> */}            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
