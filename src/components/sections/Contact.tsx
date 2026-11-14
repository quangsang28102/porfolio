"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { Toast } from "@/components/ui/Toast";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Copy, Check, Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/ui/Icons";

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setToastMessage("Đã sao chép địa chỉ email vào clipboard!");
      setTimeout(() => {
        setCopied(false);
        setToastMessage(null);
      }, 3000);
    } catch {
      setToastMessage("Không thể tự động sao chép, vui lòng copy thủ công.");
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Heading */}
        <Reveal>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-500 mb-2 inline-block">
            06 // LIÊN HỆ &amp; HỢP TÁC
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Cùng nhau kiến tạo sản phẩm tiếp theo
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Tôi luôn sẵn sàng đón nhận các cơ hội việc làm, dự án phát triển web toàn diện hoặc trao đổi kỹ thuật.
          </p>
        </Reveal>

        {/* Contact Spotlight Card */}
        <Reveal delay={0.15}>
          <SpotlightCard className="p-8 sm:p-12 rounded-3xl text-left bg-zinc-950/80 border-zinc-800 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Đang sẵn sàng cho các dự án mới</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Gửi lời chào hoặc yêu cầu tư vấn
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Bạn có thể gửi thư trực tiếp qua hộp thư cá nhân hoặc sao chép nhanh địa chỉ email dưới đây:
                </p>
                <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono pt-2">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>{personal.location}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="md:col-span-5 flex flex-col gap-3">
                {/* Email address display with copy */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-200">
                  <span className="truncate mr-2">{personal.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Sao chép email"
                    aria-label="Sao chép email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Send Email Mailto Button */}
                <a
                  href={`mailto:${personal.email}?subject=Liên hệ từ Portfolio`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(225,29,72,0.35)] hover:shadow-[0_0_30px_rgba(225,29,72,0.5)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Mở ứng dụng Email</span>
                </a>

                {/* Social channels */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  {personal.social.github && (
                    <a
                      href={personal.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {personal.social.linkedin && (
                    <a
                      href={personal.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  )}
                  {personal.social.facebook && (
                    <a
                      href={personal.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>

      {/* Copy notification toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </section>
  );
}
