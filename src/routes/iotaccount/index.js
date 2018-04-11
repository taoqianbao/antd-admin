import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { Button, Table } from 'antd'
import queryString from 'query-string'
import { config } from 'utils'
import styles from './index.less'
import { Page } from 'components'

import List from './List'

const iotAccount = ({
  iotaccount, dispatch, loading, location,
}) => {
  const { list, pagination } = iotaccount
  location.query = queryString.parse(location.search)
  const { query, pathname } = location

  const listProps = {
    pagination,
    dataSource: list,
    loading: loading.effects['iotaccount/query'],
    onChange (page) {
      dispatch(routerRedux.push({
        pathname,
        search: queryString.stringify({
          ...query,
          page: page.current,
          pageSize: page.pageSize,
        }),
      }))
    },
  }


  return (
    <Page>
      <Button type="primary">查询</Button>
      <List {...listProps} />
    </Page>
  )
}

iotAccount.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ iotaccount, loading }) => ({ iotaccount, loading }))(iotAccount)
