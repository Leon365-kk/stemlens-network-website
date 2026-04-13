import { useState, useRef, useEffect } from 'react';
import VirtualList from './VirtualList';
import { Search } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
}

interface VirtualDropdownProps {
  items: DropdownItem[];
  isOpen: boolean;
  onClose: () => void;
  onItemClick: (item: DropdownItem) => void;
  className?: string;
  placeholder?: string;
  enableSearch?: boolean;
  maxHeight?: number;
  itemHeight?: number;
}

const ITEM_HEIGHT = 48; // Height of each dropdown item in pixels
const MAX_HEIGHT = 400; // Maximum height of dropdown container

export default function VirtualDropdown({
  items,
  isOpen,
  onClose,
  onItemClick,
  className = '',
  placeholder = 'Search...',
  enableSearch = false,
  maxHeight = MAX_HEIGHT,
  itemHeight = ITEM_HEIGHT,
}: VirtualDropdownProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter items based on search term
  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setHighlightedIndex(prev => 
            prev < filteredItems.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setHighlightedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
        case 'Enter':
          event.preventDefault();
          if (highlightedIndex >= 0 && filteredItems[highlightedIndex]) {
            onItemClick(filteredItems[highlightedIndex]);
            onClose();
          }
          break;
        case 'Escape':
          event.preventDefault();
          onClose();
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, highlightedIndex, filteredItems, onItemClick, onClose]);

  // Reset search when dropdown closes
  useEffect(() => {
    if (!isOpen) {
      setSearchTerm('');
      setHighlightedIndex(-1);
    }
  }, [isOpen]);

  const renderDropdownItem = (item: DropdownItem, index: number) => {
    const isHighlighted = index === highlightedIndex;
    
    return (
      <a
        key={`${item.label}-${index}`}
        href={item.href}
        className={`flex items-center gap-3 px-4 py-3 text-sm text-[#0B1E3B] hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-[#D62828] transition-all duration-200 border-b border-gray-100/50 last:border-b-0 cursor-pointer ${
          isHighlighted ? 'bg-gradient-to-r from-gray-50 to-gray-100 text-[#D62828]' : ''
        }`}
        style={{ height: itemHeight }}
        onClick={(e) => {
          e.preventDefault();
          onItemClick(item);
          onClose();
        }}
        onMouseEnter={() => setHighlightedIndex(index)}
      >
        <span className="truncate">{item.label}</span>
      </a>
    );
  };

  if (!isOpen) return null;

  const shouldUseVirtualization = filteredItems.length > 10; // Use virtualization for more than 10 items

  return (
    <div
      ref={dropdownRef}
      className={`absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200/50 backdrop-blur-sm z-50 ${className}`}
      style={{ width: '100%', maxWidth: '400px' }}
    >
      {/* Search Bar */}
      {enableSearch && (
        <div className="p-3 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder={placeholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Dropdown Content */}
      <div style={{ height: Math.min(maxHeight, filteredItems.length * itemHeight) }}>
        {filteredItems.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4">
            No items found
          </div>
        ) : shouldUseVirtualization ? (
          <VirtualList
            items={filteredItems}
            itemHeight={itemHeight}
            containerHeight={Math.min(maxHeight, filteredItems.length * itemHeight)}
            renderItem={renderDropdownItem}
            overscan={3}
          />
        ) : (
          <div className="max-h-full overflow-y-auto">
            {filteredItems.map((item, index) => renderDropdownItem(item, index))}
          </div>
        )}
      </div>

      {/* Footer with item count */}
      <div className="px-4 py-2 border-t border-gray-200 bg-gray-50 rounded-b-xl">
        <div className="text-xs text-gray-500">
          {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
          {searchTerm && ` found`}
        </div>
      </div>
    </div>
  );
}
