// iconUtils.js
import InputIcon from '@mui/icons-material/Input';
import BranchIcon from '@mui/icons-material/CallSplit';
import DisplayIcon from '@mui/icons-material/ScreenShare';
import OutputIcon from '@mui/icons-material/Output';
import AggregatorIcon from '@mui/icons-material/FilterList';
import InputCollectorIcon from '@mui/icons-material/FolderSpecial';
import TransformerIcon from '@mui/icons-material/Transform';
import LlmIcon from '@mui/icons-material/Language';
import TextIcon from '@mui/icons-material/TextSnippet';

export const getNodeIcon = (label) => {
  switch (label) {
    case 'Input':
      return <InputIcon fontSize="small" sx={{ color: '#8a8a8a' }} />;
    case 'Branch':
      return <BranchIcon fontSize="small" sx={{ color: '#8a8a8a' }} />;
    case 'Display':
      return <DisplayIcon fontSize="small" sx={{ color: '#8a8a8a' }} />;
    case 'Output':
      return <OutputIcon fontSize="small" sx={{ color: '#8a8a8a' }} />;
    case 'Aggregator':
      return <AggregatorIcon fontSize="small" sx={{ color: '#8a8a8a' }} />;
    case 'InputCollector':
      return <InputCollectorIcon fontSize="small" sx={{ color: '#8a8a8a' }} />;
    case 'Transformer':
      return <TransformerIcon fontSize="small" sx={{ color: '#8a8a8a' }} />;
    case 'LLM':
      return <LlmIcon fontSize="small" sx={{ color: '#8a8a8a' }} />;
    case 'Text':
      return <TextIcon fontSize="small" sx={{ color: '#8a8a8a' }} />;
    default:
      return <InputIcon fontSize="small" sx={{ color: '#8a8a8a' }} />;
  }
};
