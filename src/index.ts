import { container } from './container';
import { TYPES } from './types';
import { ICafeService } from './interfaces';

// DIコンテナからICafeServiceのインスタンスを取得
// コンテナがCafeServiceを生成し、その際に依存するCafeRepositoryも自動的に注入してくれる
const cafeService = container.get<ICafeService>(TYPES.ICafeService);

// サービスを使って処理を実行
async function run() {
  console.log('--- Getting cafe-123 ---');
  const cafe1 = await cafeService.findCafe('cafe-123');
  console.log('Result:', cafe1);

  console.log('\n--- Getting cafe-456 ---');
  const cafe2 = await cafeService.findCafe('cafe-456');
  console.log('Result:', cafe2);

  console.log('\n--- Getting non-existent-cafe ---');
  const cafe3 = await cafeService.findCafe('non-existent-cafe');
  console.log('Result:', cafe3);
}

run();
