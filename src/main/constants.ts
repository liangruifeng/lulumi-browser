import * as path from 'path';

const lulumiRootPath = process.env.NODE_ENV === 'development'
  ? path.resolve(__dirname, '../../')
  : path.resolve(__dirname, '../');
const lulumiHelperPath = process.env.NODE_ENV === 'development'
  ? path.resolve(lulumiRootPath, 'src', 'helper')
  : path.resolve(lulumiRootPath, 'dist');

export default {
  lulumiRootPath,
  lulumiHelperPath,
  devUserData: `${path.resolve(lulumiRootPath, 'userData')}`,
  testUserData: `${path.resolve(lulumiRootPath, 'test', 'userData')}`,
  lulumiPagesCustomProtocol: 'lulumi',
  lulumiPreloadPath: `${path.resolve(lulumiRootPath, 'dist')}`,
  lulumiPDFJSPath: `${path.resolve(lulumiHelperPath, 'pdfjs')}`,
  lulumiRev: '1a5357c2d38e58a0a6a870954eea047bb35b5422',
};
