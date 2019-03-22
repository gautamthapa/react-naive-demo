import { Navigation } from 'react-native-navigation';

const startTabs = () => {

    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: "reactdemo1.FindPlaceScreen",
                label: "Find Place",
                title: "Find Place"
            },
            {
                screen: "reactdemo1.SharePlaceScreen",
                label: "Share Place",
                title: "Share Place"
            }
        ]
    });
};

export default startTabs;
