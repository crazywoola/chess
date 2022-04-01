import React, { memo } from 'react';
import { useDragLayer } from 'react-dnd';

const layerStyles: React.CSSProperties = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
};

function getItemStyles(
    initialOffset: any,
    currentOffset: any,
    offset: number,
) {
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        };
    }
    const { x, y } = currentOffset;

    const transform = `translate(${x - offset / 2}px, ${y - offset}px)`;
    return {
        transform,
        WebkitTransform: transform,
    };
}

interface IProps {
    type: string;
    offset: number;
    children: (item: any) => JSX.Element;
}

const DragLayer: React.FC<IProps> = memo(
    ({ type, children, offset }) => {
        const { itemType, isDragging, item, initialOffset, currentOffset } = useDragLayer(
            (monitor: any) => ({
                item: monitor.getItem(),
                itemType: monitor.getItemType(),
                initialOffset: monitor.getInitialSourceClientOffset(),
                currentOffset: monitor.getClientOffset(),
                isDragging: monitor.isDragging(),
            })
        );
        function renderItem() {
            if (itemType === type) {
                return children(item);
            }
            return null;
        }

        if (!isDragging) {
            return null;
        }

        return (
            <div style={layerStyles}>
                <div
                    style={getItemStyles(
                        initialOffset,
                        currentOffset,
                        offset,
                    )}
                >
                    {renderItem()}
                </div>
            </div>
        );
    }
);

export default DragLayer;
