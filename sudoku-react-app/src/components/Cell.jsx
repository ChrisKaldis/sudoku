export default function Cell({ boxIndex, cellIndex, value, isSelected, onSelect, isInitial }) {
    return (
        <div
            id={`box-${boxIndex}-cell-${cellIndex}`}
            className={`cell ${value === 0 ? 'cell--empty' : 'cell--filled'} ${isSelected ? 'cell--selected' : ''} ${isInitial ? 'cell--initial' : ''}`}
            onClick={onSelect}
        >
            {value !== 0 ? value : ''}
        </div>
    );
}