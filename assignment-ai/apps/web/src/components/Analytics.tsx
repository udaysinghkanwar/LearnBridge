'use client';

import { type WritingStats, getReadabilityColor } from '@/lib/analytics';

interface AnalyticsProps {
  stats: WritingStats;
}

export default function Analytics({ stats }: AnalyticsProps) {
  if (stats.wordCount === 0) {
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
          <span>📊</span>
          Writing Stats
        </h3>
        <p className="text-xs text-gray-500">Start writing to see statistics...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
      <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
        <span>📊</span>
        Writing Stats
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {/* Word Count */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-2">
          <div className="text-xs text-gray-400 mb-1">Words</div>
          <div className="text-lg font-bold text-blue-400">{stats.wordCount.toLocaleString()}</div>
        </div>

        {/* Character Count */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-2">
          <div className="text-xs text-gray-400 mb-1">Characters</div>
          <div className="text-lg font-bold text-blue-400">{stats.charCount.toLocaleString()}</div>
        </div>

        {/* Sentences */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-2">
          <div className="text-xs text-gray-400 mb-1">Sentences</div>
          <div className="text-lg font-bold text-purple-400">{stats.sentenceCount.toLocaleString()}</div>
        </div>

        {/* Paragraphs */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-2">
          <div className="text-xs text-gray-400 mb-1">Paragraphs</div>
          <div className="text-lg font-bold text-purple-400">{stats.paragraphCount.toLocaleString()}</div>
        </div>

        {/* Reading Time */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-2">
          <div className="text-xs text-gray-400 mb-1">Reading Time</div>
          <div className="text-lg font-bold text-cyan-400">
            {stats.readingTimeMinutes < 1 
              ? '<1 min'
              : `${Math.ceil(stats.readingTimeMinutes)} min`}
          </div>
        </div>

        {/* Avg Sentence Length */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-2">
          <div className="text-xs text-gray-400 mb-1">Avg Sentence</div>
          <div className="text-lg font-bold text-cyan-400">{stats.avgSentenceLength} words</div>
        </div>
      </div>

      {/* Readability Score - Full Width */}
      <div className="mt-3 bg-gray-800 border border-gray-700 rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs text-gray-400">Reading Level</div>
          <div className={`text-sm font-bold ${getReadabilityColor(stats.readabilityScore)}`}>
            {stats.readabilityLevel}
          </div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all ${
              stats.readabilityScore >= 70
                ? 'bg-green-500'
                : stats.readabilityScore >= 50
                ? 'bg-yellow-500'
                : 'bg-red-500'
            }`}
            style={{ width: `${stats.readabilityScore}%` }}
          />
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Flesch Score: {stats.readabilityScore}/100
        </div>
      </div>

      {/* Vocabulary Diversity */}
      <div className="mt-3 bg-gray-800 border border-gray-700 rounded-lg p-3">
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-400">Vocabulary Diversity</div>
          <div className="text-sm font-bold text-indigo-400">
            {(stats.vocabularyDiversity * 100).toFixed(0)}%
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Unique words per total words
        </div>
      </div>
    </div>
  );
}

