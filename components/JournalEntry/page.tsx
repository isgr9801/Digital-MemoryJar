"use client";
import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import TextareaAutosize from 'react-textarea-autosize';
import { MdMic } from 'react-icons/md';
import { motion } from 'framer-motion';

const JournalEntry: React.FC = () => {
  const [entry, setEntry] = useState<string>('');
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const handleSave = async () => {
    const content = entry || transcript;
    if (!content) return;
    console.log('Saving:', content);
    setEntry('');
    resetTranscript();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card w-full max-w-md p-6"
    >
      <h2 className="text-2xl font-bold text-white mb-4">Capture Your Thoughts</h2>
      <TextareaAutosize
        className="w-full min-h-[100px] bg-transparent border border-white/30 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50 resize-none"
        placeholder="Write or speak your journal entry..."
        value={entry || transcript}
        onChange={(e) => setEntry(e.target.value)}
      />
      <div className="flex justify-between mt-4">
        <button
          onClick={() => SpeechRecognition.startListening({ continuous: true })}
          className={`glass-button flex items-center ${listening ? 'animate-pulse' : ''}`}
        >
          <MdMic className="mr-2" /> {listening ? 'Listening...' : 'Voice Input'}
        </button>
        <button onClick={handleSave} className="glass-button">
          Save Entry
        </button>
      </div>
    </motion.div>
  );
};

export default JournalEntry;