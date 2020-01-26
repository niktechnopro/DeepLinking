package com.deeplinking;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;
import android.view.KeyEvent;
import android.os.Bundle;


//this portion is needed for React Event Emitter
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;

import com.facebook.react.bridge.ReactMethod;


public class GlobalReceiver extends BroadcastReceiver{//this receiver is registered with AndroidManifest - no need to unregister
    private final String TAG = "GlobalReceiver";
    private static final String ACTION_GLOBAL_BUTTON = "android.intent.action.GLOBAL_BUTTON";
    private static final String ACTION_HDMI_AUDIO_PLUG = "android.media.action.HDMI_AUDIO_PLUG";
    private static final String CUSTOM_ALARM_ACTION = "android.epic.ALARM_TIMER_SERVICE"; 
    private static long sLastEventTime;
    private static Context appContext;
    private static long lastTimeEvent = 0;

    
    @Override
    public void onReceive(Context context, final Intent intent){
        Log.d(TAG, "onReceive here: " + intent);
        appContext = context.getApplicationContext();
        Toast.makeText(appContext, "Something went wrong, try again or contact tech support", Toast.LENGTH_LONG).show();
    }

}