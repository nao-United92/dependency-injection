import 'reflect-metadata'; // InversifyJSのデコレーターを使用するファイルではインポートが必要
import { injectable } from 'inversify';
import { ICafeRepository, Cafe } from './interfaces';

@injectable() // InversifyJSに管理されるクラスであることを示すデコレーター
export class CafeRepository implements ICafeRepository {
  async getCafe(id: string): Promise<Cafe | undefined> {
    console.log(`[CafeRepository] Fetching cafe with id: ${id}`);
    // 実際にはデータベースやAPIからデータを取得する処理
    if (id === 'cafe-123') {
      return {
        id: 'cafe-123',
        name: 'サンプルカフェ',
        address: '東京都渋谷区...',
      };
    }
    if (id === 'cafe-456') {
      return {
        id: 'cafe-456',
        name: '美味しいコーヒー店',
        address: '大阪府中央区...',
      };
    }
    return undefined; // 見つからない場合
  }
}
