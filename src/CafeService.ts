import 'reflect-metadata'; // InversifyJSのデコレーターを使用するファイルではインポートが必要
import { injectable, inject } from 'inversify';
import { ICafeService, ICafeRepository, Cafe } from './interfaces';
import { TYPES } from './types';

@injectable() // InversifyJSに管理されるクラスであることを示すデコレーター
export class CafeService implements ICafeService {
  private cafeRepository: ICafeRepository;

  // コンストラクタで依存オブジェクト (ICafeRepository) を受け取る
  // @inject デコレーターでDIコンテナにどの型のインスタンスを注入するか指示する
  constructor(@inject(TYPES.ICafeRepository) cafeRepository: ICafeRepository) {
    this.cafeRepository = cafeRepository;
  }

  async findCafe(id: string): Promise<Cafe | undefined> {
    console.log(`[CafeService] Processing request for cafe id: ${id}`);
    // Repositoryを使ってデータを取得
    const cafe = await this.cafeRepository.getCafe(id);

    // ここにCafeに関する追加のビジネスロジックを記述可能
    // 例: データの整形、権限チェックなど

    return cafe;
  }
}
