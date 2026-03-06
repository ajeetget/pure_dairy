import { TrendingUp, Users, ShoppingCart, Award } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '250M+',
    label: 'Tonnes of Milk Processed',
    color: 'bg-blue-500',
  },
  {
    icon: Users,
    value: '98%',
    label: 'Happy Customers',
    color: 'bg-green-500',
  },
  {
    icon: ShoppingCart,
    value: '688K+',
    label: 'Monthly Sales',
    color: 'bg-orange-500',
  },
  {
    icon: Award,
    value: '50+',
    label: 'Quality Awards',
    color: 'bg-purple-500',
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 min-[540px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center text-white hover:bg-opacity-20 transition-all"
            >
              <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon size={32} />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-green-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
