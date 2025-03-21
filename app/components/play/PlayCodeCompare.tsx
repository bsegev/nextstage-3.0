'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function PlayCodeCompare() {
  const [activeTab, setActiveTab] = useState('before');

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold font-serif mb-4"
            >
              Code <span className="animated-gradient">Transformation</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              See how we transform and optimize code for better performance and readability.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="flex border-b border-gray-200">
              <button
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'before'
                    ? 'bg-gray-100 text-gray-900 border-b-2 border-purple-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('before')}
              >
                Before
              </button>
              <button
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'after'
                    ? 'bg-gray-100 text-gray-900 border-b-2 border-cyan-400'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('after')}
              >
                After
              </button>
            </div>
            
            <div className="p-6 h-[400px] overflow-auto">
              <pre className="text-sm font-mono">
                <code className="language-javascript">
                  {activeTab === 'before' ? 
                    `// Before optimization
function processItems(items) {
  let results = [];
  
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    if (item.active === true) {
      let processed = {
        id: item.id,
        name: item.name,
        value: item.value * 2
      };
      results.push(processed);
    }
  }
  
  return results;
}` : 
                    `// After optimization
const processItems = (items) => 
  items
    .filter(item => item.active)
    .map(({ id, name, value }) => ({
      id,
      name, 
      value: value * 2
    }));`
                  }
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 