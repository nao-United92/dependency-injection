import 'reflect-metadata'; // InversifyJSデコレーターが使われているクラスをテストする場合に必要
import { CafeService } from './CafeService';
import { ICafeRepository, Cafe } from './interfaces';

describe('CafeService', () => {
  let cafeService: CafeService;
  // Jestのモック関数を持つICafeRepositoryの型を定義
  let mockCafeRepository: jest.Mocked<ICafeRepository>;

  // 各テストの前に実行される設定
  beforeEach(() => {
    // ICafeRepositoryのモックオブジェクトを作成
    mockCafeRepository = {
      getCafe: jest.fn(), // getCafeメソッドをモック関数として定義
      // ICafeRepositoryに他のメソッドがあればここに追加
    } as jest.Mocked<ICafeRepository>; // 型キャストでJestのモックメソッドであることを示す

    // CafeServiceのインスタンスを生成し、モックのCafeRepositoryを注入する
    cafeService = new CafeService(mockCafeRepository);
  });

  it('目的のカフェを見つけた', async () => {
    const cafeId = 'test-cafe-id';
    const mockCafe: Cafe = {
      id: cafeId,
      name: 'Test Cafe',
      address: 'Test Address',
    };

    // モックのgetCafeメソッドが、指定されたIDで呼ばれたときに何を返すかを定義
    mockCafeRepository.getCafe.mockResolvedValue(mockCafe);

    // CafeServiceのメソッドを呼び出す
    const result = await cafeService.findCafe(cafeId);

    // 結果の検証 (アサーション)
    expect(result).toEqual(mockCafe); // 返り値が期待するモックデータであること
    expect(mockCafeRepository.getCafe).toHaveBeenCalledWith(cafeId); // モックのgetCafeが正しいIDで呼ばれたこと
    expect(mockCafeRepository.getCafe).toHaveBeenCalledTimes(1); // モックのgetCafeが1回呼ばれたこと
  });

  it('目的のカフェを見つけられなかった', async () => {
    const cafeId = 'non-existent-id';

    // モックのgetCafeメソッドが、指定されたIDで呼ばれたときにundefinedを返すように設定
    mockCafeRepository.getCafe.mockResolvedValue(undefined);

    // CafeServiceのメソッドを呼び出す
    const result = await cafeService.findCafe(cafeId);

    // 結果の検証
    expect(result).toBeUndefined(); // 返り値がundefinedであること
    expect(mockCafeRepository.getCafe).toHaveBeenCalledWith(cafeId); // モックのgetCafeが正しいIDで呼ばれたこと
    expect(mockCafeRepository.getCafe).toHaveBeenCalledTimes(1); // モックのgetCafeが1回呼ばれたこと
  });

  // CafeServiceのfindCafeメソッド内の他のビジネスロジックに関するテストも追加可能
});
