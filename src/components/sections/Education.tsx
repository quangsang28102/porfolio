"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { GraduationCap, Award, ExternalLink, Calendar } from "lucide-react";

export function Education() {
  const { education, certifications } = portfolioData;

  const hasEducation = education && education.length > 0;
  const hasCertifications = certifications && certifications.length > 0;

  if (!hasEducation && !hasCertifications) return null;

  return (
    <section id="education" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <Reveal>
          <div className="flex flex-col items-start mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-500 mb-2">
              05 // HỌC VẤN &amp; CHỨNG CHỈ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Nền tảng đào tạo &amp; Chứng chỉ chuyên môn
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education Column */}
          {hasEducation && (
            <div>
              <div className="flex items-center gap-2 text-rose-400 font-mono text-sm font-semibold uppercase tracking-wider mb-6">
                <GraduationCap className="w-5 h-5 text-rose-500" />
                <span>Học vấn chính quy</span>
              </div>

              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <Reveal key={edu.id} delay={idx * 0.1}>
                    <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-rose-500/10 text-rose-400 border border-rose-500/20">
                          {edu.degree}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-mono text-zinc-500">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.startDate} — {edu.endDate}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {edu.major}
                      </h3>
                      <p className="text-sm text-zinc-400 mb-3">{edu.institution}</p>
                      {edu.score && (
                        <div className="inline-block px-2.5 py-1 rounded bg-zinc-800 text-xs font-mono text-zinc-300 mb-3">
                          {edu.score}
                        </div>
                      )}
                      {edu.description && (
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Column */}
          {hasCertifications && (
            <div>
              <div className="flex items-center gap-2 text-rose-400 font-mono text-sm font-semibold uppercase tracking-wider mb-6">
                <Award className="w-5 h-5 text-rose-500" />
                <span>Chứng chỉ nghề nghiệp</span>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <Reveal key={cert.id} delay={idx * 0.1}>
                    <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-rose-500/40 transition-colors flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-base font-bold text-white mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-zinc-400 font-mono mb-2">
                          {cert.issuer} • Cấp năm {cert.issuedAt}
                        </p>
                      </div>

                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-zinc-800/80 hover:bg-rose-600 hover:text-white text-zinc-400 transition-colors shrink-0"
                          aria-label="Xác thực chứng chỉ"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

