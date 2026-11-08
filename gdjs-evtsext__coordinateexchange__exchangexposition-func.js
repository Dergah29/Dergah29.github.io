
if (typeof gdjs.evtsExt__CoordinateExchange__ExchangeXPosition !== "undefined") {
  gdjs.evtsExt__CoordinateExchange__ExchangeXPosition.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CoordinateExchange__ExchangeXPosition = {};
gdjs.evtsExt__CoordinateExchange__ExchangeXPosition.idToCallbackMap = new Map();


gdjs.evtsExt__CoordinateExchange__ExchangeXPosition.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = ((eventsFunctionContext.getArgument("Xposition") - gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.getArgument("Layer"), 0)) * gdjs.evtTools.camera.getCameraZoom(runtimeScene, eventsFunctionContext.getArgument("Layer"), 0)) + (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);}
}

}


};

gdjs.evtsExt__CoordinateExchange__ExchangeXPosition.func = function(runtimeScene, Xposition, Layer, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CoordinateExchange"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CoordinateExchange"),
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
if (argName === "Xposition") return Xposition;
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CoordinateExchange__ExchangeXPosition.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__CoordinateExchange__ExchangeXPosition.registeredGdjsCallbacks = [];