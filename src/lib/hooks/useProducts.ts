import { useQuery } from '@tanstack/react-query';
import { productRoutes } from '../../api/apiRoutes';

export const GetProducts = (page: number, limit: number) => {
  const {
    data: productsData,
    isLoading: productstIsLoading,
    status: productstStatus,
  } = useQuery({
    queryKey: ['products', page, limit],
    queryFn: () => productRoutes.fetchProducts(page, limit),
  });

  return {
    productsData,
    productstIsLoading,
    productstStatus,
  };
};
