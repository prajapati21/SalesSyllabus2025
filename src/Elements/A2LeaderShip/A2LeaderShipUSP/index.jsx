import { BulbOutlined, SafetyOutlined, TeamOutlined } from "@ant-design/icons";

export default function A2LeadershipMentoringUSP() {
  return (
    <section className="bg-gray-900 text-white py-20 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-3 text-blue-400">
          Complimentary Sales & Marketing Leadership Mentoring
        </h2>
        <p className="text-md text-gray-300 max-w-2xl mx-auto mb-8">
          Unlike traditional hiring firms, we offer complimentary mentoring with every sales and marketing leadership hire to ensure smooth integration and optimal performance.
        </p>

        {/* Key Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {[ 
            { icon: <BulbOutlined className="text-4xl text-yellow-400" />, title: "Reduced Hiring Risks", desc: "Structured mentoring aligns new leaders with company goals, minimizing risks." },
            { icon: <TeamOutlined className="text-4xl text-green-400" />, title: "Stronger Leadership Skills", desc: "Develop essential competencies to drive strategy and inspire teams." },
            { icon: <SafetyOutlined className="text-4xl text-red-400" />, title: "Long-Term Success", desc: "Ensure sustainable leadership impact, reducing costly hiring mistakes." }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md">
              {item.icon}
              <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}