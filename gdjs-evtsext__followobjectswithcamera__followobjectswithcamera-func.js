
if (typeof gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera !== "undefined") {
  gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera = {};
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.idToCallbackMap = new Map();
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1= [];
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects2= [];


gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.mapOfGDgdjs_9546evtsExt_9595_9595FollowObjectsWithCamera_9595_9595FollowObjectsWithCamera_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1});
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1);
{gdjs.evtsExt__FollowObjectsWithCamera__FollowMultipleObjectsWithCamera.func(runtimeScene, gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.mapOfGDgdjs_9546evtsExt_9595_9595FollowObjectsWithCamera_9595_9595FollowObjectsWithCamera_9546GDObjectObjects1Objects, eventsFunctionContext.getArgument("HorizontalBuffer"), eventsFunctionContext.getArgument("VerticalBuffer"), eventsFunctionContext.getArgument("MaxZoom"), eventsFunctionContext.getArgument("LerpSpeed"), eventsFunctionContext);
}
}

}


};

gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.func = function(runtimeScene, Object, HorizontalBuffer, VerticalBuffer, MinZoom, MaxZoom, Layer, Camera, LerpSpeed, parentEventsFunctionContext) {
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
if (argName === "MinZoom") return MinZoom;
if (argName === "MaxZoom") return MaxZoom;
if (argName === "Layer") return Layer;
if (argName === "Camera") return Camera;
if (argName === "LerpSpeed") return LerpSpeed;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1.length = 0;
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects2.length = 0;

gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1.length = 0;
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.registeredGdjsCallbacks = [];