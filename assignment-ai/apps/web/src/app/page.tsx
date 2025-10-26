'use client';

import { useState } from 'react';
import Editor from '@/components/Editor';
import Sidebar from '@/components/Sidebar';
import type { Editor as TipTapEditor } from '@tiptap/react';

export default function Home() {
  const [editor, setEditor] = useState<TipTapEditor | null>(null);
  const [askResponse, setAskResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [courseCtx, setCourseCtx] = useState('');

  const handleEditorReady = (editorInstance: TipTapEditor) => {
    setEditor(editorInstance);
  };

  const handleAskResponse = (text: string) => {
    setAskResponse(text);
  };

  const handleLoadingChange = (isLoading: boolean) => {
    setLoading(isLoading);
  };

  return (
    <main className="h-screen flex flex-col p-4 md:p-6 bg-black">
      <header className="mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-100">Assignment AI</h1>
        <p className="text-gray-400 text-xs md:text-sm mt-1">
          AI-powered writing assistance with Ask and Agent modes
        </p>
      </header>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 overflow-hidden">
        {/* Left: Editor (2/3) */}
        <div className="col-span-1 md:col-span-2 flex flex-col overflow-hidden">
          <Editor onEditorReady={handleEditorReady} />
        </div>

        {/* Right: Sidebar with chat at bottom (1/3) */}
        <div className="col-span-1 flex flex-col overflow-hidden">
          <Sidebar 
            response={askResponse} 
            loading={loading}
            editor={editor}
            onAskResponse={handleAskResponse}
            onLoadingChange={handleLoadingChange}
            courseCtx={courseCtx}
            onCourseCtxChange={setCourseCtx}
          />
        </div>
      </div>
    </main>
  );
}

