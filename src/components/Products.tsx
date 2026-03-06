import icon from '../assets/images/gold.jpg';
import icon2 from '../assets/images/healthy-milk.jpg';
import icon3 from '../assets/images/smart-milk.jpg';
import icon4 from '../assets/images/sudha-sakti-milk.jpg';

import coconut from '../assets/images/others/coconut.jpg';
import ghee from '../assets/images/others/ghee.jpg';
import curd from '../assets/images/others/curd.jpg';
import lassi from '../assets/images/others/lassi.jpg';
import sunflower from '../assets/images/others/sunflower.jpg';
import moringa from '../assets/images/others/moringga.jpg';

const milkProducts = [
  {
    image:icon,
    name: 'Premium Gold',
    fat: '6.0%',
    snf: '9.0%',
    sizes: ['500ml', '1L'],
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    image:icon2,
    name: 'Healthy Plus',
    fat: '4.5%',
    snf: '8.7%',
    sizes: ['500ml', '1L'],
    color: 'from-blue-400 to-blue-600',
  },
  {
    image:icon3,
    name: 'Smart Toned',
    fat: '3.0%',
    snf: '8.5%',
    sizes: ['500ml', '1L', '200ml'],
    color: 'from-green-400 to-green-600',
  },
  {
    image:icon4,
    name: 'Pure Cow',
    fat: '3.5%',
    snf: '8.5%',
    sizes: ['500ml', '1L'],
    color: 'from-orange-400 to-orange-600',
  },
  {
    image:icon,
    name: 'Full Cream',
    fat: '6.0%',
    snf: '9.0%',
    sizes: ['500ml', '1L'],
    color: 'from-red-400 to-red-600',
  },
  {
    image:icon3,
    name: 'Double Toned',
    fat: '1.5%',
    snf: '9.0%',
    sizes: ['500ml', '1L'],
    color: 'from-purple-400 to-purple-600',
  },
  {
    image:icon4,
    name: 'Double Toned',
    fat: '1.5%',
    snf: '9.0%',
    sizes: ['500ml', '1L'],
    color: 'from-purple-400 to-purple-600',
  },
  {
    image:icon2,
    name: 'Double Toned',
    fat: '1.5%',
    snf: '9.0%',
    sizes: ['500ml', '1L'],
    color: 'from-purple-400 to-purple-600',
  },
];

const dairyProducts = [
  { name: 'Coconut Shell', icon: coconut },
  { name: 'Ghee', icon: ghee },
  { name: 'Lassi', icon: lassi },
  { name: 'Curd', icon: curd },
  { name: 'Moringa', icon: moringa },
  { name: 'Sunflower Oil', icon: sunflower } 
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of fresh dairy products made with love and care
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Milk Varieties</h3>
          <div className="grid grid-cols-1 min-[540px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {milkProducts.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                <div className={`bg-gray-100 p-0 text-black text-center`}>                 
                  <img src={product.image} className="w-full h-full object-cover pb-[16px] rounded-2xl" />
                  <h4 className="text-[17px] font-semibold">{product.name}</h4>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Fat Content:</span>
                    <span className="font-semibold text-gray-900">{product.fat} Min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">SNF:</span>
                    <span className="font-semibold text-gray-900">{product.snf} Min</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">Available Sizes:</p>
                    <div className="flex gap-2">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Other Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {dairyProducts.map((product) => (
              <div
                key={product.name}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex flex-col items-center justify-center p-6 text-center hover:shadow-lg transition-shadow border border-green-200"
              >
                <div className="w-[160px] h-[160px] rounded-full mb-3"> 
                  <img className='rounded-full' src={product.icon} /> 
                  </div>
                <h4 className="text-lg font-semibold text-gray-900">{product.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
