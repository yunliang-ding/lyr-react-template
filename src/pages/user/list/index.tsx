import { Table } from 'react-core-form';
import tableSchema from './schema-table';

const Page = () => {
  return <Table {...tableSchema} />;
};

// 可选，配置准入权限，若不配置则代表所有角色都可以访问
Page.auth = '/user/list';

export default Page;

