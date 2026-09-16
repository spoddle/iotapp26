import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-6 max-w-7xl mx-auto">
      {/* 4 Metric KPI Cards directly styled like the photo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="bg-[#141726] border border-[#1f2438] rounded-2xl p-5 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-sm font-bold">
              ⚡
            </div>
            <span className="text-xs text-slate-400 font-medium">Active Devices</span>
          </div>
          <div className="text-2xl font-bold text-white mb-2">2 Nodes</div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500">ESP32 Sim (Wokwi)</span>
            <span className="text-emerald-400 font-medium">● 100% Online</span>
          </div>
        </div>

        <div className="bg-[#141726] border border-[#1f2438] rounded-2xl p-5 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-sm font-bold">
              🌡️
            </div>
            <span className="text-xs text-slate-400 font-medium">Temperature Critical</span>
          </div>
          <div className="text-2xl font-bold text-white mb-2">&le; -10 °C</div>
          <div className="flex justify-between items-center text-xs">
            <Link href="/dashboard-temp" className="text-indigo-400 hover:underline">
              View Stream &gt;
            </Link>
            <span className="text-emerald-400 font-medium">SSE Armed</span>
          </div>
        </div>

        <div className="bg-[#141726] border border-[#1f2438] rounded-2xl p-5 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-sm font-bold">
              💧
            </div>
            <span className="text-xs text-slate-400 font-medium">Humidity Target</span>
          </div>
          <div className="text-2xl font-bold text-white mb-2">40.0 %</div>
          <div className="flex justify-between items-center text-xs">
            <Link href="/dashboard-humidity" className="text-indigo-400 hover:underline">
              View Stream &gt;
            </Link>
            <span className="text-slate-400">Nominal</span>
          </div>
        </div>

        <div className="bg-[#141726] border border-[#1f2438] rounded-2xl p-5 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-sm font-bold">
              🗄️
            </div>
            <span className="text-xs text-slate-400 font-medium">Storage Engine</span>
          </div>
          <div className="text-2xl font-bold text-white mb-2">Postgres</div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500">Render Cloud</span>
            <span className="text-indigo-400 font-medium">TypeORM</span>
          </div>
        </div>
      </div>

      {/* Main Info Card */}
      <div className="bg-[#141726] border border-[#1f2438] rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-2">System Overview</h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          Real-time telemetry and threshold warning architecture. The microservices pipeline ingests
          data packets from ESP32 clients into NestJS, persists readings to cloud-hosted PostgreSQL,
          and pushes immediate notifications over unified Server-Sent Event (SSE) streams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#181c2f] border border-[#232942]">
            <p className="font-semibold text-slate-200 mb-1">Telemetry Channels</p>
            <p className="text-slate-400">
              Endpoints provide both historical time-series sampling and push streams for immediate critical-event rendering.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#181c2f] border border-[#232942]">
            <p className="font-semibold text-slate-200 mb-1">Reactive Delivery</p>
            <p className="text-slate-400">
              Low-latency warning banners dispatch to connected dashboards when measured metrics drop below designated thresholds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}