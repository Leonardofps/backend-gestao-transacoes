import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaticion = await transactionsRepository.findOne(id);

    if (!transaticion) {
      throw new AppError('Transaction not found', 400);
    }

    await transactionsRepository.remove(transaticion);
  }
}

export default DeleteTransactionService;
