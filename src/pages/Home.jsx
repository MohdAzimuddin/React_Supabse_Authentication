import { UserPlus, Lock, Shield, ArrowRight, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      id: 1,
      icon: UserPlus,
      title: "User Registration",
      description:
        "Create your account with our secure, email-verified registration system powered by Supabase.",
    },
    {
      id: 2,
      icon: Lock,
      title: "Secure Sign-In",
      description:
        "Access your account with confidence through our encrypted authentication system.",
    },
    {
      id: 3,
      icon: Shield,
      title: "Protected Dashboard",
      description:
        "Access exclusive content and features through our protected routing system.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main*/}
      <main className="flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
            <span className="block text-white mb-2">Welcome to the</span>
            <span className="text-green-500">Authentication System</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Experience secure, seamless authentication with A-grade security and
            modern design principles.
          </p>

          {/* Card */}
          <div className="grid md:grid-cols-3 gap-8 py-16">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="flex flex-col items-center gap-4 shadow-md shadow-green-500 p-6"
                >
                  {/* Icon */}
                  <div className="">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Action */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
            <Link
              to="/signup"
              className="p-3 bg-green-400 font-bold text-xl rounded-md hover:bg-green-600"
            >
              <div className="flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 hover:translate-x-1 transition-transform duration-600" />
              </div>
            </Link>
            {/*  */}
            <Link
              to="/signin"
              className="p-3 bg-transparent border-2 border-green-600 font-bold text-xl rounded-md hover:bg-green-600"
            >
              <div className="flex items-center">
                Sign In
                <LogIn className="w-5 h-5 ml-2 hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
