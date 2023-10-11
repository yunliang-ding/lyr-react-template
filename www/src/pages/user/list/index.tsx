import { useEffect } from 'react';
import useBreadCrumb from '@/hooks/useBreadCrumb';
import tableSchema from './schema-table';
import { Table } from 'react-core-form';

const Page = () => {
  const breadCrumb = useBreadCrumb();
  useEffect(() => {
    breadCrumb?.update({
      list: ['用户管理', '用户列表'],
      title: '用户列表',
    });
  }, []);
  return <Table {...tableSchema} />;
};
Page.pageConfig = {
  // 可选，配置准入权限，若不配置则代表所有角色都可以访问
  auth: ['用户列表'],
};
export default Page;
