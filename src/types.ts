export type Tree = {
    family: Family,
    leafType: LeafType,
    leafShape: LeafShape,
    leafMargin: LeafMargin,
    LeafArrangement: LeafArrangement
}

export enum Family {
    BEECH,
    BEAN,
    BIGNONIA,
    BIRCH,
    ELM,
    EBONY,
    HORSECHESTNUT,
    LAUREL,
    LINDEN,
    MAGNOLIA,
    MAPLE,
    MULBERRY,
    OLIVE,
    PLANE_TREE,
    ROSE,
    TUPELO,
    WALNUT,
    WILLOW,
    WITCHHAZEL,
    PINE,
    CYPRESS,
    INVASIVE
}
export enum LeafType {
    BROAD,
    NARROW
}
export enum LeafShape {
    LOBED,
    PALMATE,
    ODD_PINNATE,
    EVEN_PINNATE,
    BIPINNATE
}
export enum LeafMargin {
    ENTIRE,
    SPINY,
    SERRATE,
    DOUBLY_SERRATE,
    CRENATE
}
export enum LeafArrangement {
    ALTERNATE,
    OPPOSITE,
    WHORLED
}
