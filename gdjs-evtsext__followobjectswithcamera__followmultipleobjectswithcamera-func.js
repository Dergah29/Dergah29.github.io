
if (typeof gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera !== "undefined") {
  gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera = {};
gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.idToCallbackMap = new Map();
gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.forEachIndex2 = 0;

gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.forEachObjects2 = [];

gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.forEachTemporary2 = null;

gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.forEachTotalCount2 = 0;

gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1= [];
gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects2= [];
gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects3= [];
gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects4= [];


gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects2, gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects3);

{runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MinX").setNumber(Math.min(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MinX")), (( gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects3[0].getAABBLeft())));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects2, gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects3);

{runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MaxX").setNumber(Math.max(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MaxX")), (( gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects3[0].getAABBRight())));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects2, gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects3);

{runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MinY").setNumber(Math.min(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MinY")), (( gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects3[0].getAABBTop())));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects2, gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects3);

{runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MaxY").setNumber(Math.max(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MaxY")), (( gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects3[0].getAABBBottom())));
}
}

}


};gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MaxZoom").setNumber(eventsFunctionContext.getArgument("MaxZoom"));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("MaxZoom") == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MaxZoom").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("LerpSpeed") > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("LerpSpeed").setNumber(eventsFunctionContext.getArgument("LerpSpeed"));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("LerpSpeed") <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("LerpSpeed").setNumber(0.05);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1);
{runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MinX").setNumber((( gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1[0].getAABBLeft()));
}
{runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MaxX").setNumber((( gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1[0].getAABBRight()));
}
{runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MinY").setNumber((( gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1[0].getAABBTop()));
}
{runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MaxY").setNumber((( gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1[0].getAABBBottom()));
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1);

for (gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.forEachIndex2 = 0;gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.forEachIndex2 < gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1.length;++gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.forEachIndex2) {
gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects2.length = 0;


gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.forEachTemporary2 = gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1[gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.forEachIndex2];
gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects2.push(gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, (( gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1[0].getLayer()), 0), (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MinX")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MaxX"))) / 2, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("LerpSpeed"))), (( gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1[0].getLayer()), 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, (( gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1[0].getLayer()), 0), (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MinY")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MaxY"))) / 2, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("LerpSpeed"))), (( gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1[0].getLayer()), 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, -(420), -(420), 1060, 500, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("CameraWidth").setNumber(Math.abs(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MaxX")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MinX"))) + eventsFunctionContext.getArgument("HorizontalBuffer") * 2);
}
{runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("CameraHeight").setNumber(Math.abs(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MaxY")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MinY"))) + eventsFunctionContext.getArgument("VerticalBuffer") * 2);
}
{runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("CameraZoom").setNumber(Math.min(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("CameraHeight")), gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("CameraWidth"))));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("CameraZoom").setNumber(Math.min(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("CameraZoom")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("MaxZoom"))));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.common.clamp(gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraZoom(runtimeScene, (( gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1[0].getLayer()), 0), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("CameraZoom")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FollowObjects").getChild("LerpSpeed"))), 0.5, 1), (( gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1[0].getLayer()), 0);
}
}

}


};

gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.func = function(runtimeScene, Object, HorizontalBuffer, VerticalBuffer, MaxZoom, LerpSpeed, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FollowObjectsWithCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FollowObjectsWithCamera"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "HorizontalBuffer") return HorizontalBuffer;
if (argName === "VerticalBuffer") return VerticalBuffer;
if (argName === "MaxZoom") return MaxZoom;
if (argName === "LerpSpeed") return LerpSpeed;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1.length = 0;
gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects2.length = 0;
gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects3.length = 0;
gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects4.length = 0;

gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects1.length = 0;
gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects2.length = 0;
gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects3.length = 0;
gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.GDObjectObjects4.length = 0;


return;
}

gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.registeredGdjsCallbacks = [];