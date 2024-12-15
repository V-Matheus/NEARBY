import { FlatList } from 'react-native';
import { Category } from '../category';
import { s } from './style';

export type CategoriesProps = {
  id: string;
  name: string;
}[];

type Props = {
  data: CategoriesProps;
};

export function Categories({ data }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Category iconId={item.id} name={item.name} />}
      horizontal
      contentContainerStyle={s.content}
      style={s.container}
      showsHorizontalScrollIndicator={false}
    />
  );
}
