
gdjs.evtsExt__AdvancedJump__WallJump = gdjs.evtsExt__AdvancedJump__WallJump || {};

/**
 * Behavior generated from Wall jump
 */
gdjs.evtsExt__AdvancedJump__WallJump.WallJump = class WallJump extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PlatformerCharacter = behaviorData.PlatformerCharacter !== undefined ? behaviorData.PlatformerCharacter : "";
    this._behaviorData.PlatformerConfigurationStack = behaviorData.PlatformerConfigurationStack !== undefined ? behaviorData.PlatformerConfigurationStack : "";
    this._behaviorData.JumpTimeFrame = behaviorData.JumpTimeFrame !== undefined ? behaviorData.JumpTimeFrame : Number("0.125") || 0;
    this._behaviorData.WallJumpSpeedX = behaviorData.WallJumpSpeedX !== undefined ? behaviorData.WallJumpSpeedX : Number("250") || 0;
    this._behaviorData.WallJumpAccelerationX = behaviorData.WallJumpAccelerationX !== undefined ? behaviorData.WallJumpAccelerationX : Number("1500") || 0;
    this._behaviorData.SideSpeedSustainTime = behaviorData.SideSpeedSustainTime !== undefined ? behaviorData.SideSpeedSustainTime : Number("0.2") || 0;
    this._behaviorData.WallSlidingGravity = behaviorData.WallSlidingGravity !== undefined ? behaviorData.WallSlidingGravity : Number("500") || 0;
    this._behaviorData.WallSlidingMaxFallingSpeed = behaviorData.WallSlidingMaxFallingSpeed !== undefined ? behaviorData.WallSlidingMaxFallingSpeed : Number("350") || 0;
    this._behaviorData.WallSlidingSpeedAbsorption = behaviorData.WallSlidingSpeedAbsorption !== undefined ? behaviorData.WallSlidingSpeedAbsorption : Number("350") || 0;
    this._behaviorData.WallSlidingFallingSpeedMin = behaviorData.WallSlidingFallingSpeedMin !== undefined ? behaviorData.WallSlidingFallingSpeedMin : Number("50") || 0;
    this._behaviorData.AutomaticSliding = behaviorData.AutomaticSliding !== undefined ? behaviorData.AutomaticSliding : false;
    this._behaviorData.PreviousX = Number("") || 0;
    this._behaviorData.IsAgainstWall = false;
    this._behaviorData.WasLeftOrRightPressed = false;
    this._behaviorData.IsWallJumping = false;
    this._behaviorData.IsJumpingLeft = false;
    this._behaviorData.WasInTheAir = false;
    this._behaviorData.HasJustWallJump = false;
    this._behaviorData.MovedAwayFromTheWall = true;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.PlatformerCharacter !== undefined)
      this._behaviorData.PlatformerCharacter = behaviorOverriding.PlatformerCharacter;
    if (behaviorOverriding.PlatformerConfigurationStack !== undefined)
      this._behaviorData.PlatformerConfigurationStack = behaviorOverriding.PlatformerConfigurationStack;
    if (behaviorOverriding.JumpTimeFrame !== undefined)
      this._behaviorData.JumpTimeFrame = behaviorOverriding.JumpTimeFrame;
    if (behaviorOverriding.WallJumpSpeedX !== undefined)
      this._behaviorData.WallJumpSpeedX = behaviorOverriding.WallJumpSpeedX;
    if (behaviorOverriding.WallJumpAccelerationX !== undefined)
      this._behaviorData.WallJumpAccelerationX = behaviorOverriding.WallJumpAccelerationX;
    if (behaviorOverriding.SideSpeedSustainTime !== undefined)
      this._behaviorData.SideSpeedSustainTime = behaviorOverriding.SideSpeedSustainTime;
    if (behaviorOverriding.WallSlidingGravity !== undefined)
      this._behaviorData.WallSlidingGravity = behaviorOverriding.WallSlidingGravity;
    if (behaviorOverriding.WallSlidingMaxFallingSpeed !== undefined)
      this._behaviorData.WallSlidingMaxFallingSpeed = behaviorOverriding.WallSlidingMaxFallingSpeed;
    if (behaviorOverriding.WallSlidingSpeedAbsorption !== undefined)
      this._behaviorData.WallSlidingSpeedAbsorption = behaviorOverriding.WallSlidingSpeedAbsorption;
    if (behaviorOverriding.WallSlidingFallingSpeedMin !== undefined)
      this._behaviorData.WallSlidingFallingSpeedMin = behaviorOverriding.WallSlidingFallingSpeedMin;
    if (behaviorOverriding.AutomaticSliding !== undefined)
      this._behaviorData.AutomaticSliding = behaviorOverriding.AutomaticSliding;
    if (behaviorOverriding.PreviousX !== undefined)
      this._behaviorData.PreviousX = behaviorOverriding.PreviousX;
    if (behaviorOverriding.IsAgainstWall !== undefined)
      this._behaviorData.IsAgainstWall = behaviorOverriding.IsAgainstWall;
    if (behaviorOverriding.WasLeftOrRightPressed !== undefined)
      this._behaviorData.WasLeftOrRightPressed = behaviorOverriding.WasLeftOrRightPressed;
    if (behaviorOverriding.IsWallJumping !== undefined)
      this._behaviorData.IsWallJumping = behaviorOverriding.IsWallJumping;
    if (behaviorOverriding.IsJumpingLeft !== undefined)
      this._behaviorData.IsJumpingLeft = behaviorOverriding.IsJumpingLeft;
    if (behaviorOverriding.WasInTheAir !== undefined)
      this._behaviorData.WasInTheAir = behaviorOverriding.WasInTheAir;
    if (behaviorOverriding.HasJustWallJump !== undefined)
      this._behaviorData.HasJustWallJump = behaviorOverriding.HasJustWallJump;
    if (behaviorOverriding.MovedAwayFromTheWall !== undefined)
      this._behaviorData.MovedAwayFromTheWall = behaviorOverriding.MovedAwayFromTheWall;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    PlatformerCharacter: this._behaviorData.PlatformerCharacter,
    PlatformerConfigurationStack: this._behaviorData.PlatformerConfigurationStack,
    JumpTimeFrame: this._behaviorData.JumpTimeFrame,
    WallJumpSpeedX: this._behaviorData.WallJumpSpeedX,
    WallJumpAccelerationX: this._behaviorData.WallJumpAccelerationX,
    SideSpeedSustainTime: this._behaviorData.SideSpeedSustainTime,
    WallSlidingGravity: this._behaviorData.WallSlidingGravity,
    WallSlidingMaxFallingSpeed: this._behaviorData.WallSlidingMaxFallingSpeed,
    WallSlidingSpeedAbsorption: this._behaviorData.WallSlidingSpeedAbsorption,
    WallSlidingFallingSpeedMin: this._behaviorData.WallSlidingFallingSpeedMin,
    AutomaticSliding: this._behaviorData.AutomaticSliding,
    PreviousX: this._behaviorData.PreviousX,
    IsAgainstWall: this._behaviorData.IsAgainstWall,
    WasLeftOrRightPressed: this._behaviorData.WasLeftOrRightPressed,
    IsWallJumping: this._behaviorData.IsWallJumping,
    IsJumpingLeft: this._behaviorData.IsJumpingLeft,
    WasInTheAir: this._behaviorData.WasInTheAir,
    HasJustWallJump: this._behaviorData.HasJustWallJump,
    MovedAwayFromTheWall: this._behaviorData.MovedAwayFromTheWall,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.PlatformerCharacter !== undefined)
      this._behaviorData.PlatformerCharacter = networkSyncData.props.PlatformerCharacter;
    if (networkSyncData.props.PlatformerConfigurationStack !== undefined)
      this._behaviorData.PlatformerConfigurationStack = networkSyncData.props.PlatformerConfigurationStack;
    if (networkSyncData.props.JumpTimeFrame !== undefined)
      this._behaviorData.JumpTimeFrame = networkSyncData.props.JumpTimeFrame;
    if (networkSyncData.props.WallJumpSpeedX !== undefined)
      this._behaviorData.WallJumpSpeedX = networkSyncData.props.WallJumpSpeedX;
    if (networkSyncData.props.WallJumpAccelerationX !== undefined)
      this._behaviorData.WallJumpAccelerationX = networkSyncData.props.WallJumpAccelerationX;
    if (networkSyncData.props.SideSpeedSustainTime !== undefined)
      this._behaviorData.SideSpeedSustainTime = networkSyncData.props.SideSpeedSustainTime;
    if (networkSyncData.props.WallSlidingGravity !== undefined)
      this._behaviorData.WallSlidingGravity = networkSyncData.props.WallSlidingGravity;
    if (networkSyncData.props.WallSlidingMaxFallingSpeed !== undefined)
      this._behaviorData.WallSlidingMaxFallingSpeed = networkSyncData.props.WallSlidingMaxFallingSpeed;
    if (networkSyncData.props.WallSlidingSpeedAbsorption !== undefined)
      this._behaviorData.WallSlidingSpeedAbsorption = networkSyncData.props.WallSlidingSpeedAbsorption;
    if (networkSyncData.props.WallSlidingFallingSpeedMin !== undefined)
      this._behaviorData.WallSlidingFallingSpeedMin = networkSyncData.props.WallSlidingFallingSpeedMin;
    if (networkSyncData.props.AutomaticSliding !== undefined)
      this._behaviorData.AutomaticSliding = networkSyncData.props.AutomaticSliding;
    if (networkSyncData.props.PreviousX !== undefined)
      this._behaviorData.PreviousX = networkSyncData.props.PreviousX;
    if (networkSyncData.props.IsAgainstWall !== undefined)
      this._behaviorData.IsAgainstWall = networkSyncData.props.IsAgainstWall;
    if (networkSyncData.props.WasLeftOrRightPressed !== undefined)
      this._behaviorData.WasLeftOrRightPressed = networkSyncData.props.WasLeftOrRightPressed;
    if (networkSyncData.props.IsWallJumping !== undefined)
      this._behaviorData.IsWallJumping = networkSyncData.props.IsWallJumping;
    if (networkSyncData.props.IsJumpingLeft !== undefined)
      this._behaviorData.IsJumpingLeft = networkSyncData.props.IsJumpingLeft;
    if (networkSyncData.props.WasInTheAir !== undefined)
      this._behaviorData.WasInTheAir = networkSyncData.props.WasInTheAir;
    if (networkSyncData.props.HasJustWallJump !== undefined)
      this._behaviorData.HasJustWallJump = networkSyncData.props.HasJustWallJump;
    if (networkSyncData.props.MovedAwayFromTheWall !== undefined)
      this._behaviorData.MovedAwayFromTheWall = networkSyncData.props.MovedAwayFromTheWall;
  }

  // Properties:
  
  _getPlatformerCharacter() {
    return this._behaviorData.PlatformerCharacter !== undefined ? this._behaviorData.PlatformerCharacter : "";
  }
  _setPlatformerCharacter(newValue) {
    this._behaviorData.PlatformerCharacter = newValue;
  }
  _getPlatformerConfigurationStack() {
    return this._behaviorData.PlatformerConfigurationStack !== undefined ? this._behaviorData.PlatformerConfigurationStack : "";
  }
  _setPlatformerConfigurationStack(newValue) {
    this._behaviorData.PlatformerConfigurationStack = newValue;
  }
  _getJumpTimeFrame() {
    return this._behaviorData.JumpTimeFrame !== undefined ? this._behaviorData.JumpTimeFrame : Number("0.125") || 0;
  }
  _setJumpTimeFrame(newValue) {
    this._behaviorData.JumpTimeFrame = newValue;
  }
  _getWallJumpSpeedX() {
    return this._behaviorData.WallJumpSpeedX !== undefined ? this._behaviorData.WallJumpSpeedX : Number("250") || 0;
  }
  _setWallJumpSpeedX(newValue) {
    this._behaviorData.WallJumpSpeedX = newValue;
  }
  _getWallJumpAccelerationX() {
    return this._behaviorData.WallJumpAccelerationX !== undefined ? this._behaviorData.WallJumpAccelerationX : Number("1500") || 0;
  }
  _setWallJumpAccelerationX(newValue) {
    this._behaviorData.WallJumpAccelerationX = newValue;
  }
  _getSideSpeedSustainTime() {
    return this._behaviorData.SideSpeedSustainTime !== undefined ? this._behaviorData.SideSpeedSustainTime : Number("0.2") || 0;
  }
  _setSideSpeedSustainTime(newValue) {
    this._behaviorData.SideSpeedSustainTime = newValue;
  }
  _getWallSlidingGravity() {
    return this._behaviorData.WallSlidingGravity !== undefined ? this._behaviorData.WallSlidingGravity : Number("500") || 0;
  }
  _setWallSlidingGravity(newValue) {
    this._behaviorData.WallSlidingGravity = newValue;
  }
  _getWallSlidingMaxFallingSpeed() {
    return this._behaviorData.WallSlidingMaxFallingSpeed !== undefined ? this._behaviorData.WallSlidingMaxFallingSpeed : Number("350") || 0;
  }
  _setWallSlidingMaxFallingSpeed(newValue) {
    this._behaviorData.WallSlidingMaxFallingSpeed = newValue;
  }
  _getWallSlidingSpeedAbsorption() {
    return this._behaviorData.WallSlidingSpeedAbsorption !== undefined ? this._behaviorData.WallSlidingSpeedAbsorption : Number("350") || 0;
  }
  _setWallSlidingSpeedAbsorption(newValue) {
    this._behaviorData.WallSlidingSpeedAbsorption = newValue;
  }
  _getWallSlidingFallingSpeedMin() {
    return this._behaviorData.WallSlidingFallingSpeedMin !== undefined ? this._behaviorData.WallSlidingFallingSpeedMin : Number("50") || 0;
  }
  _setWallSlidingFallingSpeedMin(newValue) {
    this._behaviorData.WallSlidingFallingSpeedMin = newValue;
  }
  _getAutomaticSliding() {
    return this._behaviorData.AutomaticSliding !== undefined ? this._behaviorData.AutomaticSliding : false;
  }
  _setAutomaticSliding(newValue) {
    this._behaviorData.AutomaticSliding = newValue;
  }
  _toggleAutomaticSliding() {
    this._setAutomaticSliding(!this._getAutomaticSliding());
  }
  _getPreviousX() {
    return this._behaviorData.PreviousX !== undefined ? this._behaviorData.PreviousX : Number("") || 0;
  }
  _setPreviousX(newValue) {
    this._behaviorData.PreviousX = newValue;
  }
  _getIsAgainstWall() {
    return this._behaviorData.IsAgainstWall !== undefined ? this._behaviorData.IsAgainstWall : false;
  }
  _setIsAgainstWall(newValue) {
    this._behaviorData.IsAgainstWall = newValue;
  }
  _toggleIsAgainstWall() {
    this._setIsAgainstWall(!this._getIsAgainstWall());
  }
  _getWasLeftOrRightPressed() {
    return this._behaviorData.WasLeftOrRightPressed !== undefined ? this._behaviorData.WasLeftOrRightPressed : false;
  }
  _setWasLeftOrRightPressed(newValue) {
    this._behaviorData.WasLeftOrRightPressed = newValue;
  }
  _toggleWasLeftOrRightPressed() {
    this._setWasLeftOrRightPressed(!this._getWasLeftOrRightPressed());
  }
  _getIsWallJumping() {
    return this._behaviorData.IsWallJumping !== undefined ? this._behaviorData.IsWallJumping : false;
  }
  _setIsWallJumping(newValue) {
    this._behaviorData.IsWallJumping = newValue;
  }
  _toggleIsWallJumping() {
    this._setIsWallJumping(!this._getIsWallJumping());
  }
  _getIsJumpingLeft() {
    return this._behaviorData.IsJumpingLeft !== undefined ? this._behaviorData.IsJumpingLeft : false;
  }
  _setIsJumpingLeft(newValue) {
    this._behaviorData.IsJumpingLeft = newValue;
  }
  _toggleIsJumpingLeft() {
    this._setIsJumpingLeft(!this._getIsJumpingLeft());
  }
  _getWasInTheAir() {
    return this._behaviorData.WasInTheAir !== undefined ? this._behaviorData.WasInTheAir : false;
  }
  _setWasInTheAir(newValue) {
    this._behaviorData.WasInTheAir = newValue;
  }
  _toggleWasInTheAir() {
    this._setWasInTheAir(!this._getWasInTheAir());
  }
  _getHasJustWallJump() {
    return this._behaviorData.HasJustWallJump !== undefined ? this._behaviorData.HasJustWallJump : false;
  }
  _setHasJustWallJump(newValue) {
    this._behaviorData.HasJustWallJump = newValue;
  }
  _toggleHasJustWallJump() {
    this._setHasJustWallJump(!this._getHasJustWallJump());
  }
  _getMovedAwayFromTheWall() {
    return this._behaviorData.MovedAwayFromTheWall !== undefined ? this._behaviorData.MovedAwayFromTheWall : true;
  }
  _setMovedAwayFromTheWall(newValue) {
    this._behaviorData.MovedAwayFromTheWall = newValue;
  }
  _toggleMovedAwayFromTheWall() {
    this._setMovedAwayFromTheWall(!this._getMovedAwayFromTheWall());
  }
}

/**
 * Shared data generated from Wall jump
 */
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.SharedData = class WallJumpSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AdvancedJump_WallJumpSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AdvancedJump_WallJumpSharedData = new gdjs.evtsExt__AdvancedJump__WallJump.WallJump.SharedData(
      initialData
    );
  }
  return instanceContainer._AdvancedJump_WallJumpSharedData;
}

// Methods:
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWasInTheAir() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).RememberJumpKeyPressed("Jump", eventsFunctionContext);
}
}
}

}


{

/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasJustWallJump()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsWallJumping(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ToggleSideSpeed(false, eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isFalling() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);

{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsJumpingLeft() ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Left") ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);

{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsJumpingLeft()) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Right") ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsWallJumping(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ToggleSideSpeed(false, eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsWallJumping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsJumpingLeft(false);
}
}
}

}


{

/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsJumpingLeft(true);
}
}
}

}


};gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsAgainstWall(false);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousX() == (gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3);

{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Left") ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Right")) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3);

{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Left")) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Right") ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2_1final, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsAgainstWall(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).RememberIsAgainstWall(eventsFunctionContext);
}
}

{ //Subevents
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousX((gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX()));
}
}
}

}


};gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsJumpingLeft() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).setCurrentSpeed(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWallJumpSpeedX()));
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsJumpingLeft()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).setCurrentSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWallJumpSpeedX());
}
}
}

}


};gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).WasJumpKeyPressed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpTimeFrame(), "Jump", eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ForgetJumpKeyPressed("Jump", eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).setCanJump();
}
}
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsWallJumping(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ToggleSideSpeed(true, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ForgetIsAgainstWall(eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasJustWallJump(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].resetTimer("__WallJump_TimeFromJumpStart");
}
}

{ //Subevents
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasJustWallJump(false);
}
}
}

}


{

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsAgainstWall() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).WasAgainstWall(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpTimeFrame(), eventsFunctionContext) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsJumpingLeft() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).setCurrentSpeed(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWallJumpSpeedX()));
}
}
}

}


{

/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsJumpingLeft()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).setCurrentSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWallJumpSpeedX());
}
}
}

}


};gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsWallJumping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("__WallJump_TimeFromJumpStart") <= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideSpeedSustainTime() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Right")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateLeftKey();
}
}
}

}


{

/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Left")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateRightKey();
}
}
}

}


};gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovedAwayFromTheWall() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).AbsorbFallingSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWallSlidingSpeedAbsorption(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMovedAwayFromTheWall(false);
}
}

{ //Subevents
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SlideOnWall(true, eventsFunctionContext);
}
}
}

}


{

/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAutomaticSliding() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsWallJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsAgainstWall()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Left") ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Right") ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2_1final, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMovedAwayFromTheWall(true);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsAgainstWall() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsAgainstWall()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isFalling()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SlideOnWall(false, eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Jump") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(72299292);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasInTheAir(false);
}
}
}

}


{

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isFalling() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isJumping() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasInTheAir(true);
}
}
}

}


{


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList13(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.eventsList14(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumpedContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumpedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumpedContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumpedContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumpedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = false;}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumpedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumpedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumpedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasJustWallJump() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumpedContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumpedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumpedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumped = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumpedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumpedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumpedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumpedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.HasJustWallJumpedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumpingContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumpingContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumpingContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumpingContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumpingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = false;}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumpingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumpingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumpingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsWallJumping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumpingContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumpingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumpingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumping = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumpingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumpingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumpingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumpingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsWallJumpingContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWallContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWallContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWallContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWallContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWallContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = false;}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWallContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWallContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWallContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsAgainstWall() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWallContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWallContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWallContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWall = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWallContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWallContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.IsAgaintWallContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberIsAgainstWallContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberIsAgainstWallContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberIsAgainstWallContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberIsAgainstWallContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberIsAgainstWallContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberIsAgainstWallContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberIsAgainstWallContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberIsAgainstWallContext.GDObjectObjects1[i].resetTimer("__WallJump_IsAgainstWall");
}
}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberIsAgainstWall = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberIsAgainstWallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberIsAgainstWallContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberIsAgainstWallContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberIsAgainstWallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberIsAgainstWallContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetIsAgainstWallContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetIsAgainstWallContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetIsAgainstWallContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetIsAgainstWallContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetIsAgainstWallContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetIsAgainstWallContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetIsAgainstWallContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetIsAgainstWallContext.GDObjectObjects1[i].removeTimer("__WallJump_IsAgainstWall");
}
}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetIsAgainstWall = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetIsAgainstWallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetIsAgainstWallContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetIsAgainstWallContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetIsAgainstWallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetIsAgainstWallContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWallContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWallContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWallContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWallContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWallContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = false;}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWallContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWallContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWallContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("__WallJump_IsAgainstWall") <= eventsFunctionContext.getArgument("TimeFrame") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWallContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWallContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWallContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWall = function(TimeFrame, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
if (argName === "TimeFrame") return TimeFrame;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWallContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWallContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasAgainstWallContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberJumpKeyPressedContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberJumpKeyPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberJumpKeyPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberJumpKeyPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberJumpKeyPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberJumpKeyPressedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberJumpKeyPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberJumpKeyPressedContext.GDObjectObjects1[i].resetTimer("__WallJump_KeyPressed_" + eventsFunctionContext.getArgument("Key"));
}
}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberJumpKeyPressed = function(Key, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
if (argName === "Key") return Key;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberJumpKeyPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberJumpKeyPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberJumpKeyPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberJumpKeyPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.RememberJumpKeyPressedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetJumpKeyPressedContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetJumpKeyPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetJumpKeyPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetJumpKeyPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetJumpKeyPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetJumpKeyPressedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetJumpKeyPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetJumpKeyPressedContext.GDObjectObjects1[i].removeTimer("__WallJump_KeyPressed_" + eventsFunctionContext.getArgument("Key"));
}
}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetJumpKeyPressed = function(Key, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
if (argName === "Key") return Key;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetJumpKeyPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetJumpKeyPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetJumpKeyPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetJumpKeyPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ForgetJumpKeyPressedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressedContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = false;}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressedContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("__WallJump_KeyPressed_" + eventsFunctionContext.getArgument("Key")) <= eventsFunctionContext.getArgument("TimeFrame") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressedContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressed = function(TimeFrame, Key, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
if (argName === "TimeFrame") return TimeFrame;
if (argName === "Key") return Key;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WasJumpKeyPressedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getMaxSpeed() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWallJumpSpeedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureMaxSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWallJumpSpeedX(), "WallJumpLeap", eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !!eventsFunctionContext.getArgument("EnableSideSpeed");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureAcceleration(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWallJumpAccelerationX(), "WallJumpLeap", eventsFunctionContext);
}
}

{ //Subevents
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("EnableSideSpeed");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).RevertConfiguration("WallJumpLeap", eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeed = function(EnableSideSpeed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
if (argName === "EnableSideSpeed") return EnableSideSpeed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.ToggleSideSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !!eventsFunctionContext.getArgument("EnableWallSliding");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureGravity(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWallSlidingGravity(), "WallJumpSliding", eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureMaxFallSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWallSlidingMaxFallingSpeed(), "WallJumpSliding", eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("EnableWallSliding");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).RevertConfiguration("WallJumpSliding", eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWall = function(EnableWallSliding, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
if (argName === "EnableWallSliding") return EnableWallSliding;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SlideOnWallContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).abortJump();
}
}
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).setCurrentFallSpeed(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWallSlidingFallingSpeedMin(), (gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentFallSpeed()) - (gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentJumpSpeed()) - eventsFunctionContext.getArgument("SpeedAbsorption")) + (gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentJumpSpeed()));
}
}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeed = function(SpeedAbsorption, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
if (argName === "SpeedAbsorption") return SpeedAbsorption;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.AbsorbFallingSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.JumpTimeFrameContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.JumpTimeFrameContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.JumpTimeFrameContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.JumpTimeFrameContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.JumpTimeFrameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpTimeFrame();}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.JumpTimeFrame = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.JumpTimeFrameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.JumpTimeFrameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.JumpTimeFrameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.JumpTimeFrameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.JumpTimeFrameContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.GDObjectObjects2= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.GDJumpTimeFrameObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.GDJumpTimeFrameObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJumpTimeFrame(0);
}
}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrame = function(JumpTimeFrame, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "JumpTimeFrame": JumpTimeFrame
},
  _objectArraysMap: {
"Object": thisObjectList
, "JumpTimeFrame": gdjs.objectsListsToArray(JumpTimeFrame)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.GDJumpTimeFrameObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.GDJumpTimeFrameObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.GDJumpTimeFrameObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetJumpTimeFrameContext.GDJumpTimeFrameObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpSpeedXContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpSpeedXContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpSpeedXContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpSpeedXContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpSpeedXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWallJumpSpeedX();}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpSpeedX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpSpeedXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpSpeedXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpSpeedXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpSpeedXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpSpeedXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpSpeedXContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpSpeedXContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpSpeedXContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpSpeedXContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpSpeedXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpSpeedXContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpSpeedXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpSpeedXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWallJumpSpeedX(eventsFunctionContext.getArgument("WallJumpSpeedX"));
}
}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpSpeedX = function(WallJumpSpeedX, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
if (argName === "WallJumpSpeedX") return WallJumpSpeedX;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpSpeedXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpSpeedXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpSpeedXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpSpeedXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpSpeedXContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpAccelerationXContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpAccelerationXContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpAccelerationXContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpAccelerationXContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpAccelerationXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWallJumpAccelerationX();}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpAccelerationX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpAccelerationXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpAccelerationXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpAccelerationXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpAccelerationXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallJumpAccelerationXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpAccelerationXContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpAccelerationXContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpAccelerationXContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpAccelerationXContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpAccelerationXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpAccelerationXContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpAccelerationXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpAccelerationXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWallJumpAccelerationX(eventsFunctionContext.getArgument("WallJumpAccelerationX"));
}
}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpAccelerationX = function(WallJumpAccelerationX, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
if (argName === "WallJumpAccelerationX") return WallJumpAccelerationX;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpAccelerationXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpAccelerationXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpAccelerationXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpAccelerationXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallJumpAccelerationXContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingGravityContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingGravityContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingGravityContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingGravityContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingGravityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWallSlidingGravity();}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingGravity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingGravityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingGravityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingGravityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingGravityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingGravityContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingGravityContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingGravityContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingGravityContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingGravityContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingGravityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingGravityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingGravityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingGravityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWallSlidingGravity(eventsFunctionContext.getArgument("WallSlidingGravity"));
}
}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingGravity = function(WallSlidingGravity, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
if (argName === "WallSlidingGravity") return WallSlidingGravity;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingGravityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingGravityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingGravityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingGravityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingGravityContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingMaxFallingSpeedContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingMaxFallingSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingMaxFallingSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingMaxFallingSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingMaxFallingSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWallSlidingMaxFallingSpeed();}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingMaxFallingSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingMaxFallingSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingMaxFallingSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingMaxFallingSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingMaxFallingSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingMaxFallingSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingMaxFallingSpeedContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingMaxFallingSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingMaxFallingSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingMaxFallingSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingMaxFallingSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingMaxFallingSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingMaxFallingSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingMaxFallingSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWallSlidingGravity(eventsFunctionContext.getArgument("WallSlidingMaxFallingSpeed"));
}
}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingMaxFallingSpeed = function(WallSlidingMaxFallingSpeed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
if (argName === "WallSlidingMaxFallingSpeed") return WallSlidingMaxFallingSpeed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingMaxFallingSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingMaxFallingSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingMaxFallingSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingMaxFallingSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingMaxFallingSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingSpeedAbsorptionContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingSpeedAbsorptionContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingSpeedAbsorptionContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingSpeedAbsorptionContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingSpeedAbsorptionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWallSlidingSpeedAbsorption();}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingSpeedAbsorption = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingSpeedAbsorptionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingSpeedAbsorptionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingSpeedAbsorptionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingSpeedAbsorptionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.WallSlidingSpeedAbsorptionContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingSpeedAbsorptionContext = {};
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingSpeedAbsorptionContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingSpeedAbsorptionContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingSpeedAbsorptionContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingSpeedAbsorptionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingSpeedAbsorptionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingSpeedAbsorptionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingSpeedAbsorptionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWallSlidingSpeedAbsorption(firebase.remoteConfig().getNumber("WallSlidingSpeedAbsorption"));
}
}
}

}


};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingSpeedAbsorption = function(WallSlidingSpeedAbsorption, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
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
if (argName === "WallSlidingSpeedAbsorption") return WallSlidingSpeedAbsorption;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingSpeedAbsorptionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingSpeedAbsorptionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingSpeedAbsorptionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingSpeedAbsorptionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__WallJump.WallJump.prototype.SetWallSlidingSpeedAbsorptionContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("AdvancedJump::WallJump", gdjs.evtsExt__AdvancedJump__WallJump.WallJump);
