import { ObjectStorage } from "../services/ObjectStorage";
import { Handle, Setter } from "./Handle";
import { GamePlayer } from "./GamePlayer";
import { Widget } from "./Widget";

const objectStorage = ObjectStorage.getInstance();

export class Item extends Widget {
  public toHandle(): HItem | null {
    return this.handle as HItem;
  }

  ///
  /// Autogenerated
  ///

  ///
  /// Functions
  ///

  public getPlayer(): GamePlayer {
    return objectStorage.getOrWrap(GetItemPlayer(this.toHandle()));
  }

  public getAbility(abilityId: number): HAbility {
    return GetItemAbility(this.toHandle(), abilityId);
  }

  public getFacing(): number {
    return GetItemFacing(this.toHandle());
  }

  public setOrientation(yaw: number, pitch: number, roll: number): this {
    SetItemOrientation(this.toHandle(), yaw, pitch, roll);
    return this;
  }

  public setDropID(unitId: number): this {
    SetItemDropID(this.toHandle(), unitId);
    return this;
  }

  public setVertexColour(red: number, green: number, blue: number, alpha: number): this {
    SetItemVertexColour(this.toHandle(), red, green, blue, alpha);
    return this;
  }

  public setDroppable(flag: boolean): this {
    SetItemDroppable(this.toHandle(), flag);
    return this;
  }

  public setTexture(textureName: string, textureIndex: number): this {
    SetItemTexture(this.toHandle(), textureName, textureIndex);
    return this;
  }

  public setFacing(facing: number, isInstant: boolean): this {
    SetItemFacing(this.toHandle(), facing, isInstant);
    return this;
  }

  public setSpaceRotation(yaw: number, pitch: number, roll: number, eulerOrder: number): this {
    SetItemSpaceRotation(this.toHandle(), yaw, pitch, roll, eulerOrder);
    return this;
  }

  public getVertexColour(): number {
    return GetItemVertexColour(this.toHandle());
  }

  public getName(): string {
    return GetItemName(this.toHandle());
  }

  public setPlayer(whichPlayer: GamePlayer, changeColor: boolean): this {
    SetItemPlayer(this.toHandle(), whichPlayer.toHandle(), changeColor);
    return this;
  }

  public getY(): number {
    return GetItemY(this.toHandle());
  }

  public setAnimationWithRarity(animation: string, rarity: HRarityControl): this {
    SetItemAnimationWithRarity(this.toHandle(), animation, rarity);
    return this;
  }

  public setPosition(x: number, y: number): this {
    SetItemPosition(this.toHandle(), x, y);
    return this;
  }

  public getType(): HItemType {
    return GetItemType(this.toHandle());
  }

  public setDropOnDeath(flag: boolean): this {
    SetItemDropOnDeath(this.toHandle(), flag);
    return this;
  }

  public getX(): number {
    return GetItemX(this.toHandle());
  }

  public isSellable(): boolean {
    return IsItemSellable(this.toHandle());
  }

  public queueAnimationByIndex(animIndex: number): this {
    QueueItemAnimationByIndex(this.toHandle(), animIndex);
    return this;
  }

  public setReplaceableTexture(textureName: string, textureIndex: number): this {
    SetItemReplaceableTexture(this.toHandle(), textureName, textureIndex);
    return this;
  }

  public remove(): this {
    RemoveItem(this.toHandle());
    return this;
  }

  public queueAnimation(animation: string): this {
    QueueItemAnimation(this.toHandle(), animation);
    return this;
  }

  public setAnimationWithRarityByIndex(animIndex: number, rarity: HRarityControl): this {
    SetItemAnimationWithRarityByIndex(this.toHandle(), animIndex, rarity);
    return this;
  }

  public getTypeId(): number {
    return GetItemTypeId(this.toHandle());
  }

  public getLevel(): number {
    return GetItemLevel(this.toHandle());
  }

  public setAnimation(animation: string): this {
    SetItemAnimation(this.toHandle(), animation);
    return this;
  }

  public setAnimationByIndex(animIndex: number): this {
    SetItemAnimationByIndex(this.toHandle(), animIndex);
    return this;
  }

  public isOwned(): boolean {
    return IsItemOwned(this.toHandle());
  }

  public setModel(modelFile: string): this {
    SetItemModel(this.toHandle(), modelFile);
    return this;
  }

  public setModelEx(modelFile: string, playerColourId: number): this {
    SetItemModelEx(this.toHandle(), modelFile, playerColourId);
    return this;
  }

  public isPowerup(): boolean {
    return IsItemPowerup(this.toHandle());
  }

  public getAbilityByIndex(abilityIndex: number): HAbility {
    return GetItemAbilityByIndex(this.toHandle(), abilityIndex);
  }

  public setMaterialTexture(textureName: string, materialId: number, textureIndex: number): this {
    SetItemMaterialTexture(this.toHandle(), textureName, materialId, textureIndex);
    return this;
  }

  ///
  /// Props
  ///

  public baseName(): string;
  public baseName(value: Setter<string, this>): this;
  public baseName(value?: Setter<string, this>): string | this {
    if (typeof value === "function") {
      value = value(GetItemBaseName(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseName(this.toHandle());
    }

    SetItemBaseName(this.toHandle(), value);
    return this;
  }

  public baseIsPerishable(): boolean;
  public baseIsPerishable(value: Setter<boolean, this>): this;
  public baseIsPerishable(value?: Setter<boolean, this>): boolean | this {
    if (typeof value === "function") {
      value = value(GetItemBaseIsPerishable(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseIsPerishable(this.toHandle());
    }

    SetItemBaseIsPerishable(this.toHandle(), value);
    return this;
  }

  public baseHotkey(): HOsKeyType;
  public baseHotkey(value: Setter<HOsKeyType, this>): this;
  public baseHotkey(value?: Setter<HOsKeyType, this>): HOsKeyType | this {
    if (typeof value === "function") {
      value = value(GetItemBaseHotkey(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseHotkey(this.toHandle());
    }

    SetItemBaseHotkey(this.toHandle(), value);
    return this;
  }

  public roll(): number;
  public roll(value: Setter<number, this>): this;
  public roll(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemRoll(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemRoll(this.toHandle());
    }

    SetItemRoll(this.toHandle(), value);
    return this;
  }

  public baseIsPowerUp(): boolean;
  public baseIsPowerUp(value: Setter<boolean, this>): this;
  public baseIsPowerUp(value?: Setter<boolean, this>): boolean | this {
    if (typeof value === "function") {
      value = value(GetItemBaseIsPowerUp(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseIsPowerUp(this.toHandle());
    }

    SetItemBaseIsPowerUp(this.toHandle(), value);
    return this;
  }

  public baseCooldownId(): number;
  public baseCooldownId(value: Setter<number, this>): this;
  public baseCooldownId(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemBaseCooldownId(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseCooldownId(this.toHandle());
    }

    SetItemBaseCooldownId(this.toHandle(), value);
    return this;
  }

  public baseStockReplenishInterval(): number;
  public baseStockReplenishInterval(value: Setter<number, this>): this;
  public baseStockReplenishInterval(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemBaseStockReplenishInterval(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseStockReplenishInterval(this.toHandle());
    }

    SetItemBaseStockReplenishInterval(this.toHandle(), value);
    return this;
  }

  public baseIsIgnoreCooldown(): boolean;
  public baseIsIgnoreCooldown(value: Setter<boolean, this>): this;
  public baseIsIgnoreCooldown(value?: Setter<boolean, this>): boolean | this {
    if (typeof value === "function") {
      value = value(GetItemBaseIsIgnoreCooldown(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseIsIgnoreCooldown(this.toHandle());
    }

    SetItemBaseIsIgnoreCooldown(this.toHandle(), value);
    return this;
  }

  public baseIsPickRandom(): boolean;
  public baseIsPickRandom(value: Setter<boolean, this>): this;
  public baseIsPickRandom(value?: Setter<boolean, this>): boolean | this {
    if (typeof value === "function") {
      value = value(GetItemBaseIsPickRandom(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseIsPickRandom(this.toHandle());
    }

    SetItemBaseIsPickRandom(this.toHandle(), value);
    return this;
  }

  public cooldown(): number;
  public cooldown(value: Setter<number, this>): this;
  public cooldown(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemCooldown(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemCooldown(this.toHandle());
    }

    SetItemCooldown(this.toHandle(), value);
    return this;
  }

  public baseDescription(): string;
  public baseDescription(value: Setter<string, this>): this;
  public baseDescription(value?: Setter<string, this>): string | this {
    if (typeof value === "function") {
      value = value(GetItemBaseDescription(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseDescription(this.toHandle());
    }

    SetItemBaseDescription(this.toHandle(), value);
    return this;
  }

  public baseLumberCost(): number;
  public baseLumberCost(value: Setter<number, this>): this;
  public baseLumberCost(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemBaseLumberCost(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseLumberCost(this.toHandle());
    }

    SetItemBaseLumberCost(this.toHandle(), value);
    return this;
  }

  public life(): number;
  public life(value: Setter<number, this>): this;
  public life(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemLife(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemLife(this.toHandle());
    }

    SetItemLife(this.toHandle(), value);
    return this;
  }

  public baseIsPawnable(): boolean;
  public baseIsPawnable(value: Setter<boolean, this>): this;
  public baseIsPawnable(value?: Setter<boolean, this>): boolean | this {
    if (typeof value === "function") {
      value = value(GetItemBaseIsPawnable(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseIsPawnable(this.toHandle());
    }

    SetItemBaseIsPawnable(this.toHandle(), value);
    return this;
  }

  public yaw(): number;
  public yaw(value: Setter<number, this>): this;
  public yaw(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemYaw(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemYaw(this.toHandle());
    }

    SetItemYaw(this.toHandle(), value);
    return this;
  }

  public pitch(): number;
  public pitch(value: Setter<number, this>): this;
  public pitch(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemPitch(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemPitch(this.toHandle());
    }

    SetItemPitch(this.toHandle(), value);
    return this;
  }

  public baseIsDroppable(): boolean;
  public baseIsDroppable(value: Setter<boolean, this>): this;
  public baseIsDroppable(value?: Setter<boolean, this>): boolean | this {
    if (typeof value === "function") {
      value = value(GetItemBaseIsDroppable(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseIsDroppable(this.toHandle());
    }

    SetItemBaseIsDroppable(this.toHandle(), value);
    return this;
  }

  public scale(): number;
  public scale(value: Setter<number, this>): this;
  public scale(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemScale(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemScale(this.toHandle());
    }

    SetItemScale(this.toHandle(), value);
    return this;
  }

  public remainingCooldown(): number;
  public remainingCooldown(value: Setter<number, this>): this;
  public remainingCooldown(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemRemainingCooldown(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemRemainingCooldown(this.toHandle());
    }

    SetItemRemainingCooldown(this.toHandle(), value);
    return this;
  }

  public baseIsSellable(): boolean;
  public baseIsSellable(value: Setter<boolean, this>): this;
  public baseIsSellable(value?: Setter<boolean, this>): boolean | this {
    if (typeof value === "function") {
      value = value(GetItemBaseIsSellable(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseIsSellable(this.toHandle());
    }

    SetItemBaseIsSellable(this.toHandle(), value);
    return this;
  }

  public baseGoldCost(): number;
  public baseGoldCost(value: Setter<number, this>): this;
  public baseGoldCost(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemBaseGoldCost(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseGoldCost(this.toHandle());
    }

    SetItemBaseGoldCost(this.toHandle(), value);
    return this;
  }

  public basePriority(): number;
  public basePriority(value: Setter<number, this>): this;
  public basePriority(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemBasePriority(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBasePriority(this.toHandle());
    }

    SetItemBasePriority(this.toHandle(), value);
    return this;
  }

  public charges(): number;
  public charges(value: Setter<number, this>): this;
  public charges(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemCharges(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemCharges(this.toHandle());
    }

    SetItemCharges(this.toHandle(), value);
    return this;
  }

  public baseClassification(): number;
  public baseClassification(value: Setter<number, this>): this;
  public baseClassification(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemBaseClassification(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseClassification(this.toHandle());
    }

    SetItemBaseClassification(this.toHandle(), value);
    return this;
  }

  public baseCharges(): number;
  public baseCharges(value: Setter<number, this>): this;
  public baseCharges(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemBaseCharges(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseCharges(this.toHandle());
    }

    SetItemBaseCharges(this.toHandle(), value);
    return this;
  }

  public userData(): number;
  public userData(value: Setter<number, this>): this;
  public userData(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemUserData(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemUserData(this.toHandle());
    }

    SetItemUserData(this.toHandle(), value);
    return this;
  }

  public baseLevel(): number;
  public baseLevel(value: Setter<number, this>): this;
  public baseLevel(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemBaseLevel(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseLevel(this.toHandle());
    }

    SetItemBaseLevel(this.toHandle(), value);
    return this;
  }

  public timeScale(): number;
  public timeScale(value: Setter<number, this>): this;
  public timeScale(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemTimeScale(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemTimeScale(this.toHandle());
    }

    SetItemTimeScale(this.toHandle(), value);
    return this;
  }

  public maxLife(): number;
  public maxLife(value: Setter<number, this>): this;
  public maxLife(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemMaxLife(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemMaxLife(this.toHandle());
    }

    SetItemMaxLife(this.toHandle(), value);
    return this;
  }

  public baseIsMorph(): boolean;
  public baseIsMorph(value: Setter<boolean, this>): this;
  public baseIsMorph(value?: Setter<boolean, this>): boolean | this {
    if (typeof value === "function") {
      value = value(GetItemBaseIsMorph(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseIsMorph(this.toHandle());
    }

    SetItemBaseIsMorph(this.toHandle(), value);
    return this;
  }

  public baseStockStartDelay(): number;
  public baseStockStartDelay(value: Setter<number, this>): this;
  public baseStockStartDelay(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemBaseStockStartDelay(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseStockStartDelay(this.toHandle());
    }

    SetItemBaseStockStartDelay(this.toHandle(), value);
    return this;
  }

  public visible(): boolean;
  public visible(value: Setter<boolean, this>): this;
  public visible(value?: Setter<boolean, this>): boolean | this {
    if (typeof value === "function") {
      value = value(IsItemVisible(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return IsItemVisible(this.toHandle());
    }

    SetItemVisible(this.toHandle(), value);
    return this;
  }

  public baseOldLevel(): number;
  public baseOldLevel(value: Setter<number, this>): this;
  public baseOldLevel(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemBaseOldLevel(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseOldLevel(this.toHandle());
    }

    SetItemBaseOldLevel(this.toHandle(), value);
    return this;
  }

  public baseUberTip(): string;
  public baseUberTip(value: Setter<string, this>): this;
  public baseUberTip(value?: Setter<string, this>): string | this {
    if (typeof value === "function") {
      value = value(GetItemBaseUberTip(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseUberTip(this.toHandle());
    }

    SetItemBaseUberTip(this.toHandle(), value);
    return this;
  }

  public invulnerable(): boolean;
  public invulnerable(value: Setter<boolean, this>): this;
  public invulnerable(value?: Setter<boolean, this>): boolean | this {
    if (typeof value === "function") {
      value = value(IsItemInvulnerable(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return IsItemInvulnerable(this.toHandle());
    }

    SetItemInvulnerable(this.toHandle(), value);
    return this;
  }

  public baseIcon(): string;
  public baseIcon(value: Setter<string, this>): this;
  public baseIcon(value?: Setter<string, this>): string | this {
    if (typeof value === "function") {
      value = value(GetItemBaseIcon(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseIcon(this.toHandle());
    }

    SetItemBaseIcon(this.toHandle(), value);
    return this;
  }

  public baseTip(): string;
  public baseTip(value: Setter<string, this>): this;
  public baseTip(value?: Setter<string, this>): string | this {
    if (typeof value === "function") {
      value = value(GetItemBaseTip(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseTip(this.toHandle());
    }

    SetItemBaseTip(this.toHandle(), value);
    return this;
  }

  public baseIsDroppableOnDeath(): boolean;
  public baseIsDroppableOnDeath(value: Setter<boolean, this>): this;
  public baseIsDroppableOnDeath(value?: Setter<boolean, this>): boolean | this {
    if (typeof value === "function") {
      value = value(GetItemBaseIsDroppableOnDeath(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseIsDroppableOnDeath(this.toHandle());
    }

    SetItemBaseIsDroppableOnDeath(this.toHandle(), value);
    return this;
  }

  public pawnable(): boolean;
  public pawnable(value: Setter<boolean, this>): this;
  public pawnable(value?: Setter<boolean, this>): boolean | this {
    if (typeof value === "function") {
      value = value(IsItemPawnable(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return IsItemPawnable(this.toHandle());
    }

    SetItemPawnable(this.toHandle(), value);
    return this;
  }

  public baseStockMaximum(): number;
  public baseStockMaximum(value: Setter<number, this>): this;
  public baseStockMaximum(value?: Setter<number, this>): number | this {
    if (typeof value === "function") {
      value = value(GetItemBaseStockMaximum(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseStockMaximum(this.toHandle());
    }

    SetItemBaseStockMaximum(this.toHandle(), value);
    return this;
  }

  public baseIsUsable(): boolean;
  public baseIsUsable(value: Setter<boolean, this>): this;
  public baseIsUsable(value?: Setter<boolean, this>): boolean | this {
    if (typeof value === "function") {
      value = value(GetItemBaseIsUsable(this.toHandle()), this);
    }

    if (typeof value === "undefined") {
      return GetItemBaseIsUsable(this.toHandle());
    }

    SetItemBaseIsUsable(this.toHandle(), value);
    return this;
  }
}
