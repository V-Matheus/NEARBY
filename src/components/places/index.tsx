import { Platform, StatusBar, Text, useWindowDimensions } from 'react-native';
import { Place, PlaceProps } from '../place';
import { useRef } from 'react';
import BottomSheet, {
  BottomSheetFlashList,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import { s } from './styles';

type Props = {
  data: PlaceProps[];
};

export function Places({ data }: Props) {
  const dimensios = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const statusBarHeight =
    Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;

  const snapPoints = {
    min: Math.min(278, dimensios.height),
    max: Math.max(dimensios.height - 128 - statusBarHeight, 0),
  };

  const handleSnapChange = (index: number) => {
    if (index > 1) {
      bottomSheetRef.current?.snapToIndex(1);
    }
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={s.indicator}
      backgroundStyle={s.container}
      enableOverDrag={false}
      onChange={handleSnapChange}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Place data={item} />}
        contentContainerStyle={s.content}
        ListHeaderComponent={() => (
          <Text style={s.title}>Explore locais perto de você</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
}
