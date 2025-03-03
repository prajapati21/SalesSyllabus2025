import React from "react";
import {
  BulbOutlined,
  FundOutlined,
  SolutionOutlined,
  TeamOutlined,
  LineChartOutlined,
  AuditOutlined,
  BarChartOutlined,
  CustomerServiceOutlined,
  RiseOutlined,
  SearchOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { Card } from "antd";

const A2BusinessPlanPage = () => {
  const marketAnalysisData = [
    {
      icon: <AuditOutlined className="text-2xl text-blue-600" />,
      title: "Defining the Right Goals",
      description:
        "Understanding market trends and customer needs ensures your business plans are aligned with current opportunities, enabling realistic and achievable objectives.",
    },
    {
      icon: <SolutionOutlined className="text-2xl text-green-600" />,
      title: "Competitor Benchmarking",
      description:
        "By analyzing competitors' strengths and weaknesses, we help you position your offerings uniquely, ensuring your business stands out.",
    },
    {
      icon: <CustomerServiceOutlined className="text-2xl text-red-600" />,
      title: "Identifying Target Audiences",
      description:
        "Pinpointing your ideal customer profiles enables precision in marketing, sales, and product development strategies.",
    },
    {
      icon: <FundOutlined className="text-2xl text-purple-600" />,
      title: "Mitigating Risks",
      description:
        "Market analysis helps uncover potential risks, from emerging competitors to economic shifts, allowing your business to prepare and adapt proactively.",
    },
    {
      icon: <BulbOutlined className="text-2xl text-yellow-600" />,
      title: "Resource Allocation",
      description:
        "Insightful market data ensures that your time, budget, and resources are invested where they yield the best returns.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-teal-600" />,
      title: "Reducing Unnecessary Expenses",
      description: "Optimize resource allocation to minimize costs.",
    },
   
  ];

  return (
    <div className=" mx-auto p-6 md:pt-20 pt-5" id="understanding">
      {/* Introduction Section */}
      <section className="mb-5">
        <Card className="shadow-lg border-none  bg-white">
          {/* <h2 className="text-xl  text-gray-900 mb-4">
          Through comprehensive research and advanced analytical tools, we provide actionable 
          insights that empower businesses to
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
           Identify growth opportunities.
 Address market challenges.
 Build a competitive edge.
          </p> */}
           <div>
            <h2 className="text-3xl text-center mb-5"> Business transformation to marketing and sales success
            </h2>
           
            {/* == */}
            <p className="text-base md:text-lg text-gray-700 mb-2">
            At Sales Syllabus, we believe that effective business transformation starts with a thorough understanding of your market. Market analysis is more than just data—it's the foundation for crafting strategies that align with industry trends, customer behaviors, and competitive landscapes.
          </p>
            {/* === */}
    
    <p className="text-base md:text-lg text-gray-700 mb-2">
            with through comprehensive research and advanced analytical tools, we provide actionable 
            insights that empower businesses to :
          </p>
    <p className="text-gray-700 text-lg leading-relaxed">
      <span className="flex items-center mb-2">
        <SearchOutlined className="mr-2" />
        Identify growth opportunities and High paying clients 
      </span>
      <span className="flex items-center mb-2">
        <BarChartOutlined className="mr-2" />
        Address market challenges.
      </span>
      <span className="flex items-center">
        <RocketOutlined className="mr-2" />
        Build a competitive edge.
      </span>
    </p>
  </div>
        </Card>
      </section>

      {/* Purpose of Market Analysis Section */}
      <section>
        <h2 className="md:text-3xl text-4xl py-5  text-gray-800 mb-2 text-center">
        Structure of Market Analysis
        </h2>
        <p className="text-center text-xl py-3" style={{textDecoration:"none"}}>Market analysis is not a standalone activity, it’s an integral part of a successful business 
        strategy. Here’s how it fuels effective planning</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {marketAnalysisData.map((item, index) => (
            <Card key={index} className="shadow-lg border-none p-1 bg-white">
              <div className="flex items-center space-x-4">
                {item.icon}
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default A2BusinessPlanPage;
