// Cafe データの型定義 (簡易版)
export interface Cafe {
  id: string;
  name: string;
  address: string;
  // 他のプロパティ...
}

// CafeRepository インターフェース
export interface ICafeRepository {
  getCafe(id: string): Promise<Cafe | undefined>;
  // 他のメソッド...
}

// CafeService インターフェース
export interface ICafeService {
  findCafe(id: string): Promise<Cafe | undefined>;
  // 他のメソッド...
}
