import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Search, Grid3X3, List, Calendar, Users, Shield, Cloud, Smartphone, Lock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-20 lg:pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8dff5] via-[#f5f0ff] to-white" />
        
        <div 
          className={`absolute -left-32 top-0 w-[600px] h-[600px] bg-gradient-to-br from-[#c4b5fd] via-[#ddd6fe] to-transparent rounded-full blur-3xl transition-all duration-1000 ${
            isLoaded ? 'opacity-60 scale-100' : 'opacity-0 scale-75'
          }`}
          style={{ animation: isLoaded ? 'blob-float 8s ease-in-out infinite' : 'none' }}
        />
        
        <div 
          className={`absolute right-0 top-1/3 w-[400px] h-[400px] bg-gradient-to-bl from-[#ddd6fe]/40 to-transparent rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-40 scale-100' : 'opacity-0 scale-75'
          }`}
          style={{ animation: isLoaded ? 'blob-float-reverse 10s ease-in-out infinite' : 'none' }}
        />
        
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-violet-300/30 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animation: `particle-float ${6 + i}s ease-in-out infinite ${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center pt-12 pb-8 lg:pt-16 lg:pb-10">
            {/* Main Headline - SEO Optimized H1 */}
            <h1 
              className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-foreground leading-[1.15] mb-6 tracking-tight transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="gradient-text">Facility Management Software</span>
              <br />
              <span className="inline-block">for Modern Enterprises</span>
            </h1>

            {/* Subheadline - Clear Value Proposition */}
            <p 
              className={`text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Track assets, manage housekeeping, handle maintenance tickets, ensure compliance, and monitor operations for hospitals, hotels, resorts, malls, and commercial buildings — all from one powerful dashboard.
            </p>

            {/* Trust Indicators */}
            <div 
              className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {[
                { icon: Cloud, text: "Cloud-based SaaS" },
                { icon: Shield, text: "Multi-location Ready" },
                { icon: Lock, text: "Role-based Access" },
                { icon: Smartphone, text: "Fast Setup & Scalable" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-violet-500" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Micro-Tagline */}
            <p 
              className={`text-sm font-medium text-violet-600 mb-4 transition-all duration-700 delay-350 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              One Platform. Complete Facility Control.
            </p>

            {/* CTAs - Demo Focused */}
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-700 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Link to="/contact">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="rounded-full px-8 h-14 text-base font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-[#1e1b4b] hover:bg-[#312e81] group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Free Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-7 h-14 text-base font-semibold border border-gray-300 bg-white hover:bg-gray-50 transition-all duration-300 group text-foreground hover:border-violet-300 hover:shadow-lg"
                >
                  <Play className="w-4 h-4 mr-2 group-hover:scale-125 group-hover:text-violet-600 transition-all duration-300" />
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div 
            className={`relative mt-6 lg:mt-8 pb-16 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-violet-500/10 via-transparent to-transparent blur-3xl -z-10" />
            
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-6 mx-auto max-w-5xl hover:shadow-[0_25px_60px_-15px_rgba(139,92,246,0.2)] transition-shadow duration-500 group">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
                    <Search className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400 hidden sm:inline">Search</span>
                    <span className="text-xs bg-gray-200 px-1.5 py-0.5 rounded text-gray-500 ml-2">⌘ 1</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-violet-600 transition-colors">
                    <Grid3X3 className="w-4 h-4" />
                    <span className="hidden sm:inline">Integrate</span>
                  </button>
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-violet-200 border-2 border-white hover:scale-110 transition-transform cursor-pointer"></div>
                    <div className="w-7 h-7 rounded-full bg-blue-200 border-2 border-white hover:scale-110 transition-transform cursor-pointer"></div>
                  </div>
                </div>
              </div>

              {/* My Tasks Section */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <h3 className="font-semibold text-foreground">Facility Dashboard</h3>
                    <p className="text-xs text-gray-400">Real-time operations overview</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium hover:bg-gray-50 hover:border-violet-200 transition-all">
                      Export Report
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#1e1b4b] text-white text-xs font-medium hover:bg-[#312e81] transition-colors hover:shadow-lg">
                      + New Ticket
                    </button>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mt-3 border-b border-gray-100 pb-2 overflow-x-auto">
                  <button className="flex items-center gap-1 text-foreground font-medium border-b-2 border-foreground pb-2 -mb-2 whitespace-nowrap">
                    <Grid3X3 className="w-3 h-3" /> Overview
                  </button>
                  <button className="flex items-center gap-1 hover:text-violet-600 transition-colors whitespace-nowrap">
                    <List className="w-3 h-3" /> Tickets
                  </button>
                  <button className="flex items-center gap-1 hover:text-violet-600 transition-colors whitespace-nowrap">
                    <Grid3X3 className="w-3 h-3" /> Assets
                  </button>
                  <button className="flex items-center gap-1 hover:text-violet-600 transition-colors whitespace-nowrap">
                    <Calendar className="w-3 h-3" /> Housekeeping
                  </button>
                  <button className="flex items-center gap-1 hover:text-violet-600 transition-colors whitespace-nowrap">
                    <Users className="w-3 h-3" /> Vendors
                  </button>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[
                  { label: "Open Tickets", value: "24", change: "-15%", period: "vs last week", color: "text-violet-600", dotColor: "bg-violet-500" },
                  { label: "Assets Tracked", value: "156", change: "+8%", period: "total active", color: "text-blue-600", dotColor: "bg-blue-500" },
                  { label: "Tasks Today", value: "38", change: "+12%", period: "housekeeping", color: "text-amber-600", dotColor: "bg-amber-500", highlight: true },
                  { label: "SLA Compliance", value: "94%", change: "+5%", period: "this month", color: "text-emerald-600", dotColor: "bg-emerald-500" },
                ].map((stat, i) => (
                  <div 
                    key={i} 
                    className={`rounded-xl p-3 border transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-pointer ${
                      stat.highlight ? 'bg-amber-50 border-amber-100 hover:border-amber-200' : 'bg-white border-gray-100 hover:border-violet-200'
                    }`}
                    style={{
                      animation: isLoaded ? `fade-in-up 0.5s ease-out ${600 + i * 100}ms forwards` : 'none',
                      opacity: 0
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-2 h-2 rounded-full ${stat.dotColor} animate-pulse`}></span>
                      <span className="text-xs font-medium text-gray-600">{stat.label}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                      <span className="text-xs text-emerald-500 font-medium">↗ {stat.change}</span>
                    </div>
                    <span className="text-[10px] text-gray-400">{stat.period}</span>
                  </div>
                ))}
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-3 gap-4">
                {/* Chart Section */}
                <div 
                  className="bg-gray-50/50 rounded-xl p-4 hover:bg-gray-50 transition-colors"
                  style={{
                    animation: isLoaded ? 'fade-in-up 0.5s ease-out 800ms forwards' : 'none',
                    opacity: 0
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                    <span className="text-xs font-semibold text-foreground">Ticket Resolution Time</span>
                  </div>
                  <div className="text-xl font-bold text-foreground mb-3">
                    2h 15m avg
                    <span className="text-xs text-emerald-500 font-medium ml-1">-18%</span>
                  </div>
                  <div className="h-20 flex items-end gap-1">
                    {[40, 65, 45, 80, 55, 70, 50, 85, 60, 75, 90].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-violet-500 to-violet-400 rounded-t transition-all duration-500 hover:from-violet-600 cursor-pointer"
                        style={{ 
                          height: `${h}%`,
                          animation: isLoaded ? `bar-grow 0.6s ease-out ${900 + i * 50}ms forwards` : 'none',
                          transform: 'scaleY(0)',
                          transformOrigin: 'bottom'
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Asset Distribution */}
                <div 
                  className="bg-gray-50/50 rounded-xl p-4 hover:bg-gray-50 transition-colors"
                  style={{
                    animation: isLoaded ? 'fade-in-up 0.5s ease-out 900ms forwards' : 'none',
                    opacity: 0
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                    <span className="text-xs font-semibold text-foreground">Assets by Department</span>
                  </div>
                  <div className="relative w-32 h-32 mx-auto group">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="12" />
                      <circle 
                        cx="50" cy="50" r="40" fill="none" stroke="#8b5cf6" strokeWidth="12" 
                        strokeDasharray="75 176" strokeLinecap="round"
                        style={{
                          animation: isLoaded ? 'donut-fill 1s ease-out 1000ms forwards' : 'none',
                          strokeDasharray: '0 251'
                        }}
                      />
                      <circle 
                        cx="50" cy="50" r="40" fill="none" stroke="#c4b5fd" strokeWidth="12" 
                        strokeDasharray="50 201" strokeDashoffset="-75" strokeLinecap="round"
                        style={{
                          animation: isLoaded ? 'donut-fill-2 1s ease-out 1100ms forwards' : 'none',
                          strokeDasharray: '0 251'
                        }}
                      />
                      <circle 
                        cx="50" cy="50" r="40" fill="none" stroke="#ede9fe" strokeWidth="12" 
                        strokeDasharray="35 216" strokeDashoffset="-125" strokeLinecap="round"
                        style={{
                          animation: isLoaded ? 'donut-fill-3 1s ease-out 1200ms forwards' : 'none',
                          strokeDasharray: '0 251'
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center group-hover:scale-110 transition-transform">
                      <span className="text-lg font-bold text-foreground">156</span>
                      <span className="text-[10px] text-gray-400">Total Assets</span>
                    </div>
                  </div>
                  <div className="flex justify-center gap-3 mt-3 text-[10px]">
                    <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-violet-500"></span> ICU</div>
                    <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-violet-300"></span> OT</div>
                    <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-violet-100"></span> Other</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div 
                  className="bg-gray-50/50 rounded-xl p-4 hover:bg-gray-50 transition-colors"
                  style={{
                    animation: isLoaded ? 'fade-in-up 0.5s ease-out 1000ms forwards' : 'none',
                    opacity: 0
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
                    <span className="text-xs font-semibold text-foreground">Recent Activity</span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { name: "AC Repair - ICU Block", dot: "bg-blue-500", tag: "In Progress", tagColor: "text-blue-600" },
                      { name: "Room 204 Cleaning", dot: "bg-emerald-500", tag: "Completed", tagColor: "text-emerald-600" },
                      { name: "X-Ray Machine PMC", dot: "bg-amber-500", tag: "Scheduled", tagColor: "text-amber-600" },
                      { name: "Vendor Contract Renewal", dot: "bg-rose-500", tag: "Due Soon", tagColor: "text-rose-600" },
                    ].map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 text-xs hover:bg-white p-1.5 -m-1.5 rounded-lg transition-colors cursor-pointer group"
                        style={{
                          animation: isLoaded ? `slide-in-right 0.4s ease-out ${1100 + i * 100}ms forwards` : 'none',
                          opacity: 0,
                          transform: 'translateX(-10px)'
                        }}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${item.dot} group-hover:scale-150 transition-transform`}></span>
                        <span className="text-foreground flex-1 truncate group-hover:text-violet-600 transition-colors">{item.name}</span>
                        <span className={`text-[10px] ${item.tagColor}`}>{item.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div 
              className="absolute -left-4 top-1/4 w-20 h-20 bg-violet-200/30 rounded-2xl blur-xl"
              style={{ animation: 'float-slow 6s ease-in-out infinite' }}
            />
            <div 
              className="absolute -right-4 top-1/3 w-16 h-16 bg-purple-200/30 rounded-full blur-xl"
              style={{ animation: 'float-slow 8s ease-in-out infinite 1s' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes blob-float-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-20px, 30px) scale(0.95); }
          66% { transform: translate(30px, -20px) scale(1.05); }
        }
        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(20px, -30px); opacity: 0.6; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bar-grow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes donut-fill {
          from { stroke-dasharray: 0 251; }
          to { stroke-dasharray: 75 176; }
        }
        @keyframes donut-fill-2 {
          from { stroke-dasharray: 0 251; }
          to { stroke-dasharray: 50 201; }
        }
        @keyframes donut-fill-3 {
          from { stroke-dasharray: 0 251; }
          to { stroke-dasharray: 35 216; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
