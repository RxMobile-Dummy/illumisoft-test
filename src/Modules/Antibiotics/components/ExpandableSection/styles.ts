import { StyleSheet } from "react-native";
import { blackColor, whiteColor } from "UIToolkit/theme/colors";

const styles = StyleSheet.create({
  container:{
    shadowColor: blackColor,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 3,
    marginBottom: 18
  },
  header: {
    backgroundColor: 'yellow',
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 6,
    zIndex: 5
  },
  arrow: {
    width: 14,
    height: 10
  },
  headerExpanded: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  content: {
    backgroundColor: whiteColor
  },
  title: {
    fontWeight: '600',
    color: blackColor,
    fontSize: 14
  }
})

export default styles;
