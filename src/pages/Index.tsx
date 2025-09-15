import { Button } from "@/components/ui/button";

// Editable company metrics - update these values as needed
const ASSETS_UNDER_MANAGEMENT = "100,000";
const AVERAGE_RETURNS = "25";
const SATISFIED_CLIENTS = "5+";
const CONTACT_EMAIL = "support@ethlink.tech";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation Header */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ethlink
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30">
              <span className="text-blue-300 text-sm font-medium">⚡ Professional Digital Asset Management</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Digital Asset <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Excellence</span>
              <br />with Ethlink
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Professional digital asset management and trading services.
              <br />Maximize your portfolio potential with our expert-driven investment strategies.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg">
              ⚡ Start Investing
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg" asChild>
              <a href={`mailto:${CONTACT_EMAIL}`}>Learn More →</a>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-8">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                ${ASSETS_UNDER_MANAGEMENT}
              </div>
              <div className="text-slate-400">Assets Under Management</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-8">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {AVERAGE_RETURNS}%
              </div>
              <div className="text-slate-400">Average Annual Returns</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-8">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {SATISFIED_CLIENTS}
              </div>
              <div className="text-slate-400">Satisfied Clients</div>
            </div>
          </div>
          
          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/40 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-6 mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-2xl">$</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Strategic Trading</h3>
              <p className="text-slate-400">Expert-driven digital asset purchasing and selling strategies designed to maximize high-yield returns for our institutional clients.</p>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/40 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl mb-6 mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Tailored Solutions</h3>
              <p className="text-slate-400">Customized investment approaches tailored to each client's specific goals, risk tolerance, and portfolio requirements.</p>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/40 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl mb-6 mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Professional Management</h3>
              <p className="text-slate-400">Full-service digital investment management handled by our professional team on your behalf to attain optimal profit outcomes.</p>
            </div>
          </div>
          
          {/* Why Choose Ethlink Section */}
          <div className="mt-32 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ethlink</span>?
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                We combine cutting-edge technology with proven investment strategies to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Secure & Regulated</h3>
                </div>
                <p className="text-slate-400">Bank-grade security protocols and full regulatory compliance ensure your assets are protected at all times.</p>
              </div>
              
              <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Data-Driven Approach</h3>
                </div>
                <p className="text-slate-400">Advanced analytics and AI-powered insights guide our investment decisions for optimal portfolio performance.</p>
              </div>
              
              <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Personalized Strategy</h3>
                </div>
                <p className="text-slate-400">Every client receives a customized investment strategy aligned with their specific financial goals and risk profile.</p>
              </div>
              
              <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Real-Time Monitoring</h3>
                </div>
                <p className="text-slate-400">24/7 portfolio monitoring and instant execution capabilities ensure you never miss market opportunities.</p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mt-32 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Investment Process</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                A systematic approach to digital asset management that maximizes returns while minimizing risk.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Assessment</h3>
                <p className="text-slate-400 text-sm">Comprehensive analysis of your financial goals and risk tolerance.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Strategy</h3>
                <p className="text-slate-400 text-sm">Custom investment strategy designed specifically for your portfolio.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Execution</h3>
                <p className="text-slate-400 text-sm">Professional implementation of trades and portfolio management.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Monitoring</h3>
                <p className="text-slate-400 text-sm">Continuous monitoring and optimization for maximum performance.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Maximize Your Digital Assets?
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Join our exclusive client base and experience institutional-grade digital asset management.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-4 text-lg">
                <a href={`mailto:${CONTACT_EMAIL}`}>Start Your Journey Today →</a>
              </Button>
            </div>
          </div>
          
          <div className="mt-20 text-center pb-16">
            <p className="text-slate-400 text-lg">
              Questions? Contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-cyan-400 font-medium transition-colors">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
