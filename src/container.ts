import 'reflect-metadata'; // InversifyJSのContainerを使用するファイルではインポートが必要
import { Container } from 'inversify';
import { TYPES } from './types';
import { ICafeRepository, ICafeService } from './interfaces';
import { CafeRepository } from './CafeRepository';
import { CafeService } from './CafeService';

const container = new Container();

// インターフェース (TYPES.ICafeRepository) が要求されたら、
// CafeRepository のインスタンスを提供するようにバインディング
container.bind<ICafeRepository>(TYPES.ICafeRepository).to(CafeRepository);

// インターフェース (TYPES.ICafeService) が要求されたら、
// CafeService のインスタンスを提供するようにバインディング
// CafeServiceはコンストラクタでICafeRepositoryを要求しているので、
// InversifyJSが自動的にICafeRepositoryのインスタンス(CafeRepository)を注入してくれる
container.bind<ICafeService>(TYPES.ICafeService).to(CafeService);

// コンテナをエクスポート
export { container };
