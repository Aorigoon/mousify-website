import { QrCode } from "lucide-react";

export default function CloudBand() {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 md:flex-row md:justify-between">
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Control your PC from anywhere.
          </h2>
          <p className="mt-4 leading-relaxed text-white/60">
            Cloud mode relays your phone to your PC through a free relay — no
            port forwarding, no VPN, no account.
          </p>
        </div>
        <div className="flex items-center gap-4 rounded-3xl bg-white/10 p-5">
          <div className="rounded-2xl bg-white p-3">
            <QrCode className="h-10 w-10 text-ink" strokeWidth={2} />
          </div>
          <div>
            <p className="font-medium text-white">Cloud QR</p>
            <p className="text-sm text-white/60">
              Scan once — connect from anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
