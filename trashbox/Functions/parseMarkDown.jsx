import ReactMarkdown from 'react-markdown';

export default function markDown(rawString) {
  if (!rawString) return;

  return <ReactMarkdown>{rawString}</ReactMarkdown>;
}
