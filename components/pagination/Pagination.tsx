import React from 'react';
import RcPagination from 'rc-pagination';
import enUS from 'rc-pagination/lib/locale/en_US';
import classNames from 'classnames';
import LocaleConsumer from '../locale-provider/LocaleConsumer';
import Select from '../select';
import MiniSelect from './MiniSelect';

export interface PaginationProps {
  total: number;
  defaultCurrent?: number;
  current?: number;
  defaultPageSize?: number;
  pageSize?: number;
  onChange?: (page: number, pageSize: number) => void;
  showSizeChanger?: boolean;
  pageSizeOptions?: string[];
  onShowSizeChange?: (current: number, size: number) => void;
  showQuickJumper?: boolean;
  showTotal?: (total: number, range: [number, number]) => React.ReactNode;
  size?: string;
  simple?: boolean;
  style?: React.CSSProperties;
  locale?: Object;
  className?: string;
  prefixCls?: string;
  selectPrefixCls?: string;
  itemRender?: (page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next') => React.ReactNode;
}

export default class Pagination extends React.Component<PaginationProps, any> {
  static defaultProps = {
    prefixCls: 'ant-pagination',
    selectPrefixCls: 'ant-select',
  };

  render() {
    const { className, size, ...restProps } = this.props;
    const isSmall = size === 'small';
    return (
      <LocaleConsumer
        componentName="Pagination"
        defaultLocale={enUS}
      >
        {(locale) => (
          <RcPagination
            {...restProps}
            className={classNames(className, { mini: isSmall })}
            selectComponentClass={isSmall ? MiniSelect : Select}
            locale={locale}
          />
        )}
      </LocaleConsumer>
    );
  }
}
