'use client';
import React, { useState } from 'react';

export default function RoiApiTest() {
  const [log, setLog] = useState<string>('');
  const [sessionToken, setSessionToken] = useState<string>('');
  const [safeExecToken, setSafeExecToken] = useState<string>('');

  async function fetchQuestions() {
    setLog('Calling /api/roi/questions ...');
    const res = await fetch('/api/roi/questions', { method: 'POST' });
    const data = await res.json();
    setSessionToken(data.sessionToken);
    setSafeExecToken(data.safeExecToken);
    setLog(JSON.stringify({ ok:true, questions: data.questions.length, sessionToken: data.sessionToken }, null, 2));
  }

  async function computeSample() {
    if (!sessionToken || !safeExecToken) {
      setLog('Run “Fetch Questions” first to get tokens.');
      return;
    }
    setLog('Calling /api/roi/compute ...');
    const selections = { a:6, b:4, g:3, PlanFee:2, L:4, n:5, d:3 };
    const res = await fetch('/api/roi/compute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selections, sessionToken, safeExecToken })
    });
    const data = await res.json();
    setLog(JSON.stringify(data, null, 2));
  }

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, Arial' }}>
      <h1>ROI API Test • Live</h1>
      <p>This page POSTs to your API endpoints.</p>
      <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
        <button onClick={fetchQuestions}>Fetch Questions</button>
        <button onClick={computeSample}>Compute Sample</button>
      </div>
      <pre style={{ background: '#f6f8fa', padding: 12, borderRadius: 8, whiteSpace: 'pre-wrap' }}>
        {log || 'Logs will appear here...'}
      </pre>
    </div>
  );
}
