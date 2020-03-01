import React, { Component } from 'react';
import {
  List,
  AutoSizer,
  InfiniteLoader,
  CellMeasurerCache,
  CellMeasurer,
  ListRowProps,
} from 'react-virtualized';
import PropTypes from 'prop-types';

import { Loader } from 'components';

import { Container, LoaderWrapper } from './InfinityList.style';

interface Props {
  list: any[];
  loadMore: Function;
  fetching: boolean;
  rowComponent: Function;
  onRowClick: Function;
}

class InfinityList extends Component<Props> {
  _listRef: List | null = null;
  _cache = new CellMeasurerCache({
    defaultHeight: 85,
    fixedWidth: true,
  });
  // NOTE: according to docs if number of all records is unknown it should be very high number
  _POSSIBLE_NUMBER_OF_ALL_RECORDS = 100000;

  static propTypes = {
    list: PropTypes.array.isRequired,
    loadMore: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    rowComponent: PropTypes.func.isRequired,
    onRowClick: PropTypes.func.isRequired,
  };

  _isRowLoaded = ({ index }: { index: number }) => {
    const { list } = this.props;
    return !!list[index];
  };

  _rowRenderer = ({ key, index, style, parent }: ListRowProps) => {
    const {
      list,
      fetching,
      rowComponent: RowComponent,
      onRowClick,
    } = this.props;

    const element = list[index];

    const shouldDisplayLoader = !!!element && fetching;

    return (
      <CellMeasurer
        cache={this._cache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}
      >
        <div
          style={{
            ...style,
            ...(!shouldDisplayLoader && { cursor: 'pointer' }),
          }}
          onClick={() => !shouldDisplayLoader && onRowClick(element)}
        >
          {shouldDisplayLoader ? (
            <LoaderWrapper align="center" justify="center">
              <Loader />
            </LoaderWrapper>
          ) : (
            element && <RowComponent {...element} />
          )}
        </div>
      </CellMeasurer>
    );
  };

  _reSizeRowRender = (index: number) => {
    this._cache.clear(index, 0);
    if (this._listRef) {
      this._listRef.recomputeRowHeights(index);
    }
  };

  _loadMoreRows = async ({
    startIndex,
    stopIndex,
  }: {
    startIndex: number;
    stopIndex: number;
  }) => {
    const { loadMore } = this.props;

    loadMore({ startIndex, stopIndex });
  };

  _getRowCount = (): number => {
    const { list } = this.props;
    return list.length + 1;
  };

  componentDidUpdate(prevProps: Props) {
    const { list } = this.props;
    const currentListCount = list.length;
    const prevListCount = prevProps.list.length;

    if (currentListCount !== prevListCount) {
      this._reSizeRowRender(prevListCount);
    }
  }

  render() {
    return (
      <Container>
        <InfiniteLoader
          isRowLoaded={this._isRowLoaded}
          loadMoreRows={this._loadMoreRows}
          rowCount={this._POSSIBLE_NUMBER_OF_ALL_RECORDS}
        >
          {({ onRowsRendered, registerChild }) => (
            <AutoSizer>
              {({ height, width }) => (
                <List
                  width={width}
                  height={height}
                  onRowsRendered={onRowsRendered}
                  ref={el => {
                    this._listRef = el;
                    registerChild(el);
                  }}
                  rowCount={this._getRowCount()}
                  rowHeight={this._cache.rowHeight}
                  rowRenderer={this._rowRenderer}
                />
              )}
            </AutoSizer>
          )}
        </InfiniteLoader>
      </Container>
    );
  }
}

export default InfinityList;
