package com.codefriendfinder;


import com.reactnativenavigation.activities.RootActivity;

public class MainActivity extends RootActivity {

    @Override
    protected String getMainComponentName() {
        return "CodeFriendFinder";
    }

    @Override
    protected void onPause() {
        super.onPause();
        finish();
    }
}
